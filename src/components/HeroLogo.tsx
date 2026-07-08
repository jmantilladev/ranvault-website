"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Animated hero mark. Two independent transform layers so nothing conflicts:
 *   - tilt layer  (outer): JS mousemove → perspective + rotateX/rotateY, desktop only.
 *   - float layer (inner): always-on CSS vertical float; a pulsing teal glow sits
 *     behind the image. Float + glow run on all breakpoints; tilt is gated to
 *     fine-pointer devices. All animations use transform/opacity only.
 */
export default function HeroLogo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const tilt = tiltRef.current;
    if (!root || !tilt) return;
    // Desktop / fine-pointer only — no tilt on touch.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const section = root.closest("section");
    if (!section) return;

    const MAX = 7; // degrees of tilt
    const MOVE_EASE = "transform 150ms ease-out";
    const RETURN_EASE = "transform 500ms ease-out";
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const apply = () => {
      raf = 0;
      const rect = tilt.getBoundingClientRect();
      const midX = rect.left + rect.width / 2;
      const midY = rect.top + rect.height / 2;
      const nx = Math.max(-1, Math.min(1, (cx - midX) / (rect.width / 2)));
      const ny = Math.max(-1, Math.min(1, (cy - midY) / (rect.height / 2)));
      tilt.style.transition = MOVE_EASE;
      tilt.style.transform = `perspective(900px) rotateX(${(-ny * MAX).toFixed(2)}deg) rotateY(${(nx * MAX).toFixed(2)}deg)`;
    };

    const onMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      tilt.style.transition = RETURN_EASE;
      tilt.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} className="flex -translate-x-[5px] justify-center">
      {/* Tilt layer (JS-driven; neutral by default) */}
      <div
        ref={tiltRef}
        className="will-change-transform"
        style={{ transform: "perspective(900px)" }}
      >
        {/* Float layer (always-on) + glow behind the mark */}
        <div className="animate-hero-float relative">
          <span
            aria-hidden="true"
            className="animate-hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(36,188,188,1) 0%, rgba(36,188,188,0) 65%)",
            }}
          />
          <Image
            src="/media/logo-icon.png"
            alt="RanVault security mark"
            width={800}
            height={800}
            priority
            className="relative h-auto w-[130%] max-w-[1005px] will-change-transform"
          />
        </div>
      </div>
    </div>
  );
}
