"use client";

import { useEffect } from "react";

export default function ParallaxBackground() {
  useEffect(() => {
    let ticking = false;

    function updateParallax() {
      const scroll = window.pageYOffset;
      const speed = 0.5;
      const yPos = -(scroll * speed);
      document.body.style.backgroundPosition = `center ${yPos}px`;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
