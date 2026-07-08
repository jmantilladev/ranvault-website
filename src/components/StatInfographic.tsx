"use client";

import { useEffect, useRef, useState } from "react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { ShieldPlus, LockKey, Envelope, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { cx } from "@/lib/utils";

type Stat = {
  Icon: PhosphorIcon;
  /** Static display value (used for non-counting stats and for SSR fallback). */
  display: string;
  label: string;
  /** When set, the number animates 0 → count and appends `suffix`. */
  count?: number;
  suffix?: string;
};

const STATS: Stat[] = [
  {
    Icon: ShieldPlus,
    display: "10x",
    label: "A stolen medical record is worth up to ten times more than a stolen credit card",
  },
  {
    Icon: LockKey,
    display: "70%",
    count: 70,
    suffix: "%",
    label: "Of ransomware attacks hit businesses with fewer than 500 employees",
  },
  {
    Icon: Envelope,
    display: "#1",
    label: "Healthcare is the most phishing-targeted industry of any sector",
  },
  {
    Icon: UsersThree,
    display: "82%",
    count: 82,
    suffix: "%",
    label: "Of the U.S. population had health data exposed in 2024",
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

function StatBlock({
  stat,
  index,
  active,
  reduced,
}: {
  stat: Stat;
  index: number;
  active: boolean;
  reduced: boolean;
}) {
  const isCount = typeof stat.count === "number";
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isCount || !active) return;
    if (reduced) {
      setVal(stat.count!);
      return;
    }
    let raf = 0;
    const duration = 1100;
    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(Math.round(easeOutCubic(p) * stat.count!));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isCount, active, reduced, stat.count]);

  const revealed = active || reduced;
  const number = isCount ? `${val}${stat.suffix ?? ""}` : stat.display;

  return (
    <div
      className={cx(
        "flex flex-col items-center px-2 text-center lg:px-8",
        index > 0 && "lg:border-l lg:border-velvet-black/[0.08]",
      )}
    >
      <stat.Icon weight="duotone" className="mb-4 h-8 w-8 text-teal-accent" />
      <span
        className={cx(
          "text-[2.75rem] font-bold leading-none tracking-[-0.02em] text-healthcare-blue tabular-nums",
          !isCount && !reduced && "transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          !isCount && (revealed ? "scale-100 opacity-100" : "scale-90 opacity-0"),
        )}
      >
        {number}
      </span>
      <p className="mt-3 text-[13.5px] leading-[1.5] text-velvet-black/70">{stat.label}</p>
    </div>
  );
}

/**
 * Problem-section stat band. Four figures in a unified panel — a row of four on
 * desktop (with hairline dividers), 2x2 on tablet, single column on mobile.
 * Percentages count up when the band scrolls into view; "10x" / "#1" fade and
 * scale in. Honors prefers-reduced-motion (values appear at their final state).
 */
export default function StatInfographic() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mx-auto mt-12 max-w-5xl sm:mt-14">
      <div className="overflow-hidden rounded-2xl border border-velvet-black/[0.08] bg-white shadow-[0_1px_2px_rgba(39,39,39,0.04),0_18px_44px_-26px_rgba(16,99,140,0.22)]">
        <div className="grid grid-cols-1 gap-y-10 p-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 sm:p-10 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-0 lg:py-12">
          {STATS.map((stat, i) => (
            <StatBlock key={stat.display} stat={stat} index={i} active={active} reduced={reduced} />
          ))}
        </div>
        <div className="border-t border-velvet-black/[0.06] px-8 py-3.5 sm:px-10">
          <p className="text-center text-xs text-velvet-black/40">
            Sources: HHS OCR, Trustwave SpiderLabs, KnowBe4
          </p>
        </div>
      </div>
    </div>
  );
}
