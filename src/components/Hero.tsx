import HeroLogo from "@/components/HeroLogo";
import HeroPatternSpotlight from "@/components/HeroPatternSpotlight";

const TRUST_SIGNALS = ["HIPAA", "42 CFR Part 2"];

/** Small shield-check glyph used in the trust strip. */
function ShieldIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-teal-accent"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-healthcare-blue text-white-cap">
      {/*
        Intentional, layered background (emil-design-eng taste): directional
        light top-to-bottom, a soft desaturated teal aurora anchored top-right,
        a brighter pocket lifting the headline, and a grounding shadow at the
        base — depth instead of a flat default fill.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            // Directional light: faint top sheen → settle → deeper, grounded base
            "linear-gradient(180deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0) 20%, rgba(0,0,0,0) 58%, rgba(0,0,0,0.24) 100%)",
            // Primary teal aurora, anchored top-right, soft and desaturated
            "radial-gradient(48% 42% at 86% 4%, rgba(36,188,188,0.20) 0%, rgba(36,188,188,0) 72%)",
            // Aurora extension hugging the right edge for a longer falloff
            "radial-gradient(34% 50% at 103% 22%, rgba(36,188,188,0.10) 0%, rgba(36,188,188,0) 62%)",
            // Quiet highlight pocket behind the headline so text reads crisply
            "radial-gradient(52% 56% at 18% 26%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)",
            // Grounding shadow, lower-left, settles the section
            "radial-gradient(62% 60% at 4% 112%, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0) 56%)",
          ].join(","),
        }}
      />
      {/* Framing vignette — barely-there, keeps focus toward the content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(118% 120% at 50% 34%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.18) 100%)",
        }}
      />
      {/* Subtle hex-grid texture over the gradient (heropatterns "Hexagons"),
          white at ~6% opacity — barely-there depth, not a visible pattern. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cpath fill='%23ffffff' fill-rule='evenodd' d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/svg%3E\")",
          backgroundSize: "42px 74px",
        }}
      />
      {/* Desktop-only mouse-tracking spotlight that brightens the hex pattern */}
      <HeroPatternSpotlight />
      {/* Fine film grain for tactile depth (soft-light keeps it whisper-quiet) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-[6.6rem] sm:px-8 sm:py-[7.7rem] lg:py-[9.9rem]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12">
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 rounded-full border border-white-cap/15
                        bg-white-cap/[0.06] px-4 py-2 text-[0.8rem] font-semibold uppercase
                        tracking-[0.18em] text-white-cap/75 backdrop-blur-sm">
            Cybersecurity for Behavioral Health Clinics
          </p>

          {/* Headline — display moment: larger, bolder, tighter than the subhead */}
          <h1 className="mt-7 text-[2.68rem] font-bold leading-[1.1] tracking-[-0.03em]
                         text-white-cap sm:text-[3.17rem] lg:text-[3.39rem]">
            Focus on Patients.
            <br />
            We&rsquo;ll Handle Security.
          </h1>

          {/* Subheadline — lighter weight/size for clear hierarchy under the headline */}
          <p className="mx-auto mt-7 max-w-xl text-[1.24rem] font-normal leading-[1.7] text-white-cap/75 lg:mx-0">
            HIPAA-compliant protection from data breaches and compliance risk,
            built for clinics, not enterprises.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white-cap px-8 py-4
                         text-[1.1rem] font-semibold text-healthcare-blue
                         shadow-[0_16px_40px_-12px_rgba(0,0,0,0.45)]
                         transition-[transform,background-color,color,box-shadow] duration-200
                         ease-[var(--ease-spring)] hover:-translate-y-0.5 hover:bg-teal-accent
                         hover:text-velvet-black hover:shadow-[0_20px_46px_-12px_rgba(36,188,188,0.5)]
                         active:translate-y-0"
            >
              Book a Free Security Assessment
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full
                         border border-white-cap/25 px-7 py-4 text-[1.1rem] font-medium text-white-cap
                         transition-[transform,background-color,border-color] duration-200
                         ease-[var(--ease-spring)] hover:-translate-y-0.5 hover:border-teal-accent/60
                         hover:bg-white-cap/5 active:translate-y-0"
            >
              See How It Works
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform duration-200 ease-[var(--ease-spring)]
                           group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-[3.3rem] flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
            {TRUST_SIGNALS.map((signal) => (
              <div key={signal} className="inline-flex items-center gap-2">
                <ShieldIcon />
                <span className="text-sm font-medium tracking-wide text-white-cap/85">
                  {signal}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual — animated RanVault mark (float + glow always; tilt on desktop) */}
        <HeroLogo />
      </div>
      </div>

      {/* Soft divider into the logo strip below (fill matches White Cap) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="block h-[42px] w-full sm:h-[60px]"
        >
          <path d="M0,34 C360,66 1080,66 1440,34 L1440,70 L0,70 Z" fill="#fafafa" />
        </svg>
      </div>
    </section>
  );
}
