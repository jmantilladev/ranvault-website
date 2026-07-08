import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { IconArrowRight } from "@/components/icons";
import { HOMEPAGE_SERVICES } from "@/lib/services";

/** Shared secondary CTA — styled for the dark background. */
function Cta() {
  return (
    <Link
      href="/services"
      className="group inline-flex items-center gap-2 rounded-full border border-white-cap/25 px-6 py-3
                 text-sm font-semibold text-white-cap
                 transition-[transform,background-color,border-color] duration-200 ease-[var(--ease-spring)]
                 hover:-translate-y-0.5 hover:border-teal-accent/60 hover:bg-white-cap/[0.06]
                 active:translate-y-0 active:scale-[0.98]"
    >
      See Full Service Details
      <IconArrowRight className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-spring)] group-hover:translate-x-0.5" />
    </Link>
  );
}

/**
 * Section 9 — Services Overview. A deliberately dark, asymmetric "chapter":
 * a left header/CTA column (~40%) against a right column (~60%) listing the six
 * services, breaking the centered white rhythm of the surrounding sections.
 */
export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-velvet-black py-20 text-white-cap sm:py-28 lg:py-32"
    >
      {/* Layered depth — faint top sheen, a soft teal aurora, a grounding shadow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 18%, rgba(0,0,0,0) 58%, rgba(0,0,0,0.28) 100%)",
            "radial-gradient(42% 44% at 86% 8%, rgba(36,188,188,0.14) 0%, rgba(36,188,188,0) 70%)",
            "radial-gradient(50% 55% at 4% 100%, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0) 60%)",
          ].join(","),
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          {/* LEFT ~40% — header + CTA, vertically centered */}
          <div className="flex flex-col lg:col-span-2 lg:justify-center">
            <SectionHeading
              align="left"
              tone="invert"
              eyebrow="Our Services"
              title={
                <>
                  Security Built for Clinics,
                  <br />
                  Not Enterprises
                </>
              }
              subtitle="Everything you need to stay protected and compliant, without hiring an internal security team."
            />
            <Reveal delay={160} className="mt-8 hidden lg:block">
              <Cta />
            </Reveal>
          </div>

          {/* RIGHT ~60% — the six services as a divided list */}
          <ul className="lg:col-span-3">
            {HOMEPAGE_SERVICES.map(({ Icon, title, tagline }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={i * 70}
                className="flex items-start gap-4 border-t border-white-cap/10 py-6 first:border-t-0 first:pt-0 sm:gap-5 lg:py-7"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-teal-accent/[0.1] text-teal-accent ring-1 ring-inset ring-teal-accent/25 shadow-[0_6px_18px_-8px_rgba(36,188,188,0.5)]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-white-cap">{title}</h3>
                  <p className="mt-1 text-[14px] leading-[1.5] text-white-cap/60">{tagline}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          {/* CTA for mobile — appears after the list */}
          <Reveal delay={120} className="lg:hidden">
            <Cta />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
