"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// How quickly the eased values catch up with the real scroll position (0–1 per frame).
const SMOOTHING = 0.12;
// Scroll distance over which an element animates in, as a share of the screen (capped).
// Text settles quickly so it's readable as soon as it's comfortably on screen; panels and
// images take longer for a more cinematic move.
const ENTER_DISTANCE_CAP = 460;
const ENTER_SHARE = { text: 0.2, card: 0.3, panel: 0.45, clip: 0.5 };
// Elements further right start a little later, so a row of cards cascades.
const ROW_CASCADE = 0.22;
// Panels ease back while their last part passes through this top share of the screen.
const EXIT_SHARE = 0.3;
const SETTLED = 0.0005;

type Tracked = {
  el: HTMLElement;
  panel: boolean;
  share: number;
  top: number;
  left: number;
  height: number;
  enter: number;
  exit: number;
  parallax: number;
};

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));
const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;
const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

// Layout position, ignoring transforms (the animations themselves move the elements).
function documentOffset(el: HTMLElement) {
  let top = 0;
  let left = 0;
  let node: HTMLElement | null = el;
  while (node) {
    top += node.offsetTop;
    left += node.offsetLeft;
    node = node.offsetParent as HTMLElement | null;
  }
  return { top, left };
}

/**
 * Scroll-scrubbed animations. Every `[data-reveal]` element gets `--in` (0–1 as it enters from
 * the bottom), `--par` (−1–1, its position relative to the screen centre) and, for panels,
 * `--out` (0–1 as it leaves at the top), plus `is-entering` until fully in. <html> gets
 * `--hero-progress` (0–1 over the first screen), `--page-progress` (0–1 over the whole page),
 * `is-scrolled`, and `can-scroll` when the page is taller than the screen. All values ease
 * towards the scroll position, so they play forwards and in reverse with the scroll.
 */
export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const tracked: Tracked[] = reduceMotion
      ? []
      : Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")).map(
          (el) => ({
            el,
            panel: el.dataset.reveal === "panel",
            share:
              el.dataset.reveal === "panel"
                ? ENTER_SHARE.panel
                : el.dataset.reveal === "clip"
                  ? ENTER_SHARE.clip
                  : el.matches("h2, p")
                    ? ENTER_SHARE.text
                    : ENTER_SHARE.card,
            top: 0,
            left: 0,
            height: 0,
            enter: 0,
            exit: 0,
            parallax: 0,
          }),
        );

    const measure = () => {
      for (const item of tracked) {
        const offset = documentOffset(item.el);
        item.top = offset.top;
        item.left = offset.left;
        item.height = item.el.offsetHeight;
      }
    };

    let hero = 0;
    let page = 0;
    let frame = 0;

    const targetsFor = (
      item: Tracked,
      y: number,
      vw: number,
      vh: number,
      maxScroll: number,
    ) => {
      const top = item.top - y;
      const bottom = top + item.height;
      const distance = Math.min(ENTER_DISTANCE_CAP, vh * item.share);
      const cascade = item.panel ? 0 : (item.left / vw) * vh * ROW_CASCADE;

      // The entrance runs over this scroll range. Near the end of the page there may not be
      // enough scroll left to finish it, so it's squeezed to end at the bottom of the page.
      let startY = item.top - vh + cascade;
      let endY = startY + distance;
      if (endY > maxScroll) {
        endY = maxScroll;
        startY = Math.min(startY, endY - distance / 2);
      }

      return {
        enter: easeOutCubic(clamp((y - startY) / (endY - startY))),
        exit: item.panel
          ? easeInOutSine(clamp((vh * EXIT_SHARE - bottom) / (vh * EXIT_SHARE)))
          : 0,
        parallax: clamp((top + item.height / 2 - vh / 2) / vh, -1, 1),
      };
    };

    // `snap` jumps straight to the targets (first paint, resize) instead of easing.
    const update = (snap: boolean) => {
      const y = window.scrollY;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const scrollable = root.scrollHeight - vh;
      const ease = (current: number, target: number) =>
        snap || Math.abs(target - current) < SETTLED
          ? target
          : current + (target - current) * SMOOTHING;

      let settled = true;
      const follow = (current: number, target: number) => {
        const next = ease(current, target);
        if (next !== target) settled = false;
        return next;
      };

      hero = follow(hero, Math.min(y / vh, 1));
      page = follow(page, scrollable > 0 ? clamp(y / scrollable) : 0);
      root.style.setProperty("--hero-progress", hero.toFixed(4));
      root.style.setProperty("--page-progress", page.toFixed(4));
      root.classList.toggle("can-scroll", scrollable > 0);
      root.classList.toggle("is-scrolled", y > 8);

      // A couple of pixels of slack: the browser's last scroll position can fall just short.
      const maxScroll = Math.max(scrollable - 2, 0);
      for (const item of tracked) {
        const target = targetsFor(item, y, vw, vh, maxScroll);
        item.enter = follow(item.enter, target.enter);
        item.exit = follow(item.exit, target.exit);
        item.parallax = follow(item.parallax, target.parallax);
        item.el.style.setProperty("--in", item.enter.toFixed(4));
        // Blur only while entering; a lingering blur(0) can soften text on some phones.
        item.el.classList.toggle("is-entering", item.enter < 1);
        item.el.style.setProperty("--par", item.parallax.toFixed(4));
        if (item.panel)
          item.el.style.setProperty("--out", item.exit.toFixed(4));
      }

      return settled;
    };

    const tick = () => {
      frame = update(false) ? 0 : requestAnimationFrame(tick);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onLayoutChange = () => {
      measure();
      onScroll();
    };

    measure();
    update(true);

    // Images and fonts loading move things around; re-measure when the page resizes.
    const resizeObserver = new ResizeObserver(onLayoutChange);
    resizeObserver.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onLayoutChange);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onLayoutChange);
      cancelAnimationFrame(frame);
      for (const item of tracked) {
        item.el.style.removeProperty("--in");
        item.el.style.removeProperty("--par");
        item.el.style.removeProperty("--out");
        item.el.classList.remove("is-entering");
      }
    };
  }, [pathname]);

  return null;
}
