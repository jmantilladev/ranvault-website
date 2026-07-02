"use client";

import { useEffect, useRef } from "react";

/** Same "Hexagons" tile as the base hero pattern, so the two layers align. */
const HEX =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cpath fill='%23ffffff' fill-rule='evenodd' d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/svg%3E\")";

/** Soft ~250px-radius spotlight, fully gradual (no hard edge). */
const MASK =
  "radial-gradient(circle 250px at var(--mx, -9999px) var(--my, -9999px), #000 0%, transparent 100%)";

/** Spotlight brightness (element opacity) when active — ~6% white hexes
    (on top of the base 1.5% layer → combined peak ≈ 7%, within the 5–8% target). */
const ACTIVE_OPACITY = "0.06";

/**
 * Desktop-only mouse-tracking spotlight over the hero hex pattern.
 *
 * A second, brighter hex layer (this one) is masked to a soft radial gradient
 * that follows the cursor. Inside the spotlight the pattern lifts to ~10% (on
 * top of the untouched base 1.5% layer → combined peak ≈ 11%); outside, the mask
 * hides it and only the base shows. Cursor X/Y (relative to the hero <section>)
 * drive CSS custom properties via an rAF-throttled mousemove handler. No effect
 * on coarse/touch pointers — the layer simply stays hidden.
 */
export default function HeroPatternSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.parentElement;
    if (!el || !section) return;
    // Desktop only: skip entirely on touch / coarse pointers.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let cx = 0;
    let cy = 0;
    let raf = 0;

    const apply = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      el.style.setProperty("--mx", `${cx - rect.left}px`);
      el.style.setProperty("--my", `${cy - rect.top}px`);
      el.style.opacity = ACTIVE_OPACITY; // fades in via the CSS opacity transition
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
      el.style.opacity = "0";
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
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0"
      style={{
        backgroundImage: HEX,
        backgroundSize: "42px 74px",
        transition: "opacity 300ms ease",
        WebkitMaskImage: MASK,
        maskImage: MASK,
      }}
    />
  );
}
