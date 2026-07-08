"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CaretDown, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { cx } from "@/lib/utils";
import { SERVICES } from "@/lib/services";

/** Full detail for one service — shared by the desktop panel and mobile accordion. */
function ServiceDetail({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-[-0.02em] text-velvet-black sm:text-[1.9rem]">
        {service.title}
      </h2>
      <p className="mt-2 text-base font-semibold text-healthcare-blue">{service.tagline}</p>
      <p className="mt-4 text-[15px] leading-[1.7] text-velvet-black/70">{service.detail}</p>
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-velvet-black/45">
          What you get
        </p>
        <ul className="mt-3 space-y-2.5">
          {service.deliverables.map((d) => (
            <li key={d} className="flex gap-3 text-[15px] leading-[1.5] text-velvet-black/75">
              <CheckCircle weight="fill" className="mt-[3px] h-5 w-5 shrink-0 text-teal-accent" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Select a service and reflect it in the URL hash (without scrolling the page).
  const select = useCallback((i: number) => {
    setActive(i);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${SERVICES[i].slug}`);
    }
  }, []);

  // Deep linking: open the hash's service on load, and follow manual hash changes.
  useEffect(() => {
    const applyHash = () => {
      const slug = window.location.hash.replace(/^#/, "");
      const idx = SERVICES.findIndex((s) => s.slug === slug);
      if (idx >= 0) setActive(idx);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  // Manual-activation keyboard nav for the desktop tablist.
  const onTabsKeyDown = (e: React.KeyboardEvent) => {
    const last = SERVICES.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      {/* DESKTOP — sticky vertical tablist + detail panel */}
      <div className="hidden lg:grid lg:grid-cols-[34%_1fr] lg:items-start lg:gap-14">
        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="Services"
          onKeyDown={onTabsKeyDown}
          className="sticky top-28 flex flex-col"
        >
          {SERVICES.map(({ slug, Icon, title }, i) => {
            const selected = active === i;
            return (
              <button
                key={slug}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`tab-${slug}`}
                aria-selected={selected}
                aria-controls={`panel-${slug}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(i)}
                className={cx(
                  "group flex items-center gap-3 border-l-2 py-3.5 pl-5 pr-3 text-left",
                  "transition-[color,border-color,background-color] duration-200 ease-[var(--ease-spring)]",
                  selected
                    ? "border-teal-accent bg-teal-accent/[0.04] text-velvet-black"
                    : "border-velvet-black/10 text-velvet-black/55 hover:border-velvet-black/25 hover:text-velvet-black/80",
                )}
              >
                <Icon
                  className={cx(
                    "h-5 w-5 shrink-0 transition-colors duration-200",
                    selected ? "text-teal-accent" : "text-velvet-black/35 group-hover:text-teal-accent",
                  )}
                />
                <span className={cx("text-[15px]", selected ? "font-semibold" : "font-medium")}>
                  {title}
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${SERVICES[active].slug}`}
          aria-labelledby={`tab-${SERVICES[active].slug}`}
          tabIndex={0}
          className="focus-visible:outline-none"
        >
          <div key={active} className="animate-service-fade">
            <ServiceDetail service={SERVICES[active]} />
          </div>
        </div>
      </div>

      {/* MOBILE — accordion */}
      <div className="lg:hidden">
        {SERVICES.map(({ slug, Icon, title }, i) => {
          const open = active === i;
          return (
            <div key={slug} className="border-b border-velvet-black/10 first:border-t">
              <h3>
                <button
                  id={`acc-header-${slug}`}
                  aria-expanded={open}
                  aria-controls={`acc-panel-${slug}`}
                  onClick={() => select(i)}
                  className="flex w-full items-center gap-3 py-4 text-left"
                >
                  <Icon
                    className={cx(
                      "h-5 w-5 shrink-0",
                      open ? "text-teal-accent" : "text-velvet-black/40",
                    )}
                  />
                  <span
                    className={cx(
                      "flex-1 text-[15px]",
                      open ? "font-semibold text-velvet-black" : "font-medium text-velvet-black/75",
                    )}
                  >
                    {title}
                  </span>
                  <CaretDown
                    className={cx(
                      "h-4 w-4 shrink-0 text-velvet-black/40 transition-transform duration-200 ease-[var(--ease-spring)]",
                      open && "rotate-180 text-teal-accent",
                    )}
                  />
                </button>
              </h3>
              {open && (
                <div
                  id={`acc-panel-${slug}`}
                  role="region"
                  aria-labelledby={`acc-header-${slug}`}
                  className="animate-service-fade pb-7 pl-8"
                >
                  <ServiceDetail service={SERVICES[i]} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
