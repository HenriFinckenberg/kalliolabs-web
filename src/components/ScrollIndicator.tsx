"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";

// How long the indicator stays visible after the last scroll.
const IDLE_MS = 1200;

/**
 * A slim scroll indicator along the bottom of the screen, standing in for the hidden native
 * scrollbar. The fill follows `--page-progress` (set by ScrollEffects). With a mouse it also
 * works as a scrollbar: click to jump, drag to scrub.
 */
export default function ScrollIndicator() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    let timer = 0;
    const onScroll = () => {
      setActive(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setActive(false), IDLE_MS);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
  }, []);

  const scrollToPointer = (clientX: number, behavior: ScrollBehavior) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: ratio * scrollable, behavior });
  };

  // Touch scrolling already works everywhere; the bar only takes mouse and pen input.
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
    scrollToPointer(event.clientX, "smooth");
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragging) scrollToPointer(event.clientX, "instant");
  };

  const endDrag = () => setDragging(false);

  return (
    <div
      className={[
        "scroll-indicator",
        active && "is-active",
        dragging && "is-dragging",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div ref={trackRef} className="scroll-indicator-track">
        <div className="scroll-indicator-fill" />
      </div>
    </div>
  );
}
