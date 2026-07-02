import Reveal from "@/components/Reveal";

/** Section 12 — Mid-page CTA (repeated). Blue band to echo the hero and reset rhythm. */
export default function MidCta() {
  return (
    <section className="relative overflow-hidden bg-healthcare-blue py-20 text-white-cap sm:py-24">
      {/* Lighter, hero-consistent depth so the two blue zones feel related */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(50% 80% at 88% 0%, rgba(36,188,188,0.22) 0%, rgba(36,188,188,0) 68%)",
            "radial-gradient(60% 90% at 6% 100%, rgba(0,0,0,0.26) 0%, rgba(0,0,0,0) 60%)",
          ].join(","),
        }}
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8">
        <Reveal
          as="h2"
          className="text-pretty text-3xl font-semibold leading-[1.12] tracking-[-0.025em] sm:text-4xl"
        >
          Ready to Protect Your Clinic?
        </Reveal>
        <Reveal as="p" delay={70} className="mt-4 text-lg leading-[1.7] text-white-cap/80">
          Get a free security assessment. No obligation, no jargon.
        </Reveal>
        <Reveal delay={130} className="mt-9">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white-cap px-7 py-3.5
                       text-base font-semibold text-healthcare-blue
                       shadow-[0_16px_40px_-12px_rgba(0,0,0,0.45)]
                       transition-[transform,background-color,color,box-shadow] duration-200
                       ease-[var(--ease-spring)] hover:-translate-y-0.5 hover:bg-teal-accent
                       hover:text-velvet-black hover:shadow-[0_20px_46px_-12px_rgba(36,188,188,0.5)]
                       active:translate-y-0 active:scale-[0.98]"
          >
            Book a Free Security Assessment
          </a>
        </Reveal>
      </div>
    </section>
  );
}
