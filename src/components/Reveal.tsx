"use client";

import { ElementType, useEffect, useRef, useState } from "react";

type RevealProps = {
  as?: ElementType;
  /** Stagger delay in ms once the element scrolls into view. */
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * Scroll-into-view reveal: fades + lifts content once, with a custom ease-out
 * curve (emil-design-eng: animate transform/opacity only, ease-out for entrances,
 * respect prefers-reduced-motion). Used across all home-page sections for a
 * cohesive, calm entrance rhythm consistent with the hero.
 */
export default function Reveal({ as, delay = 0, className, children }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-reveal
      data-visible={visible || undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
