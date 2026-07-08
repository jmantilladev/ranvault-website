import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServicesExplorer from "@/components/ServicesExplorer";

export const metadata: Metadata = {
  title: "Services | RanVault",
  description:
    "Everything your behavioral health practice needs to stay secure and compliant, explained in plain language. No jargon, no enterprise complexity.",
};

const PROCESS = [
  {
    title: "Free Security Assessment",
    body: "We review your current setup and find your real risks. No cost, no obligation.",
  },
  {
    title: "Your Custom Protection Plan",
    body: "You get a clear, prioritized plan built around your clinic's actual needs.",
  },
  {
    title: "We Put It in Place",
    body: "We implement the protection, working around your schedule and your systems.",
  },
  {
    title: "Ongoing Protection & Support",
    body: "We keep watch, keep you compliant, and stay ready if anything comes up.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1 — Page hero */}
        <section className="relative overflow-hidden bg-healthcare-blue text-white-cap">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: [
                "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 22%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.22) 100%)",
                "radial-gradient(50% 46% at 88% 2%, rgba(36,188,188,0.20) 0%, rgba(36,188,188,0) 70%)",
                "radial-gradient(60% 60% at 4% 110%, rgba(0,0,0,0.26) 0%, rgba(0,0,0,0) 58%)",
              ].join(","),
            }}
          />
          <div className="relative mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-16 lg:py-20">
            <Reveal
              as="p"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-accent"
            >
              Our Services
            </Reveal>
            <Reveal
              as="h1"
              delay={70}
              className="mt-4 text-balance text-[2.4rem] font-bold leading-[1.06] tracking-[-0.035em] sm:text-[2.9rem] lg:text-[3.15rem]"
            >
              Complete Protection for Your Clinic
            </Reveal>
            <Reveal
              as="p"
              delay={130}
              className="mx-auto mt-5 max-w-2xl text-lg leading-[1.7] text-white-cap/80"
            >
              You didn&rsquo;t get into behavioral health to become a cybersecurity expert.
              That&rsquo;s our job.
            </Reveal>
          </div>

          {/* Soft wave into the light content below */}
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

        {/* 2 — The seven services */}
        <section className="bg-white-cap py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <ServicesExplorer />
          </div>
        </section>

        {/* 4 — How We Work */}
        <section
          className="border-t border-velvet-black/5 py-20 sm:py-24 lg:py-28"
          style={{ backgroundColor: "rgba(16,99,140,0.035)" }}
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              align="center"
              title="How We Work"
              subtitle="Getting protected is simpler than you think. Here's what working with us looks like."
              className="mx-auto"
            />

            <div className="relative mt-14 sm:mt-16">
              {/* Connector line linking the four steps on desktop */}
              <div
                aria-hidden="true"
                className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-gradient-to-r
                           from-healthcare-blue/25 via-teal-accent/45 to-healthcare-blue/25 lg:block"
              />
              <ol className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-6">
                {PROCESS.map((step, i) => (
                  <Reveal
                    as="li"
                    key={step.title}
                    delay={i * 80}
                    className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
                  >
                    <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-healthcare-blue text-base font-semibold text-white-cap ring-4 ring-[#f6f7f8] shadow-[0_10px_24px_-10px_rgba(16,99,140,0.7)]">
                      {i + 1}
                    </span>
                    <h3 className="mt-5 text-base font-semibold tracking-[-0.01em] text-velvet-black">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[15rem] text-[14px] leading-[1.5] text-velvet-black/60 lg:max-w-none">
                      {step.body}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 5 — Reassurance */}
        <section className="bg-white-cap py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
            <Reveal
              as="h2"
              className="text-2xl font-bold tracking-[-0.02em] text-velvet-black sm:text-3xl"
            >
              Not Sure What You Need?
            </Reveal>
            <Reveal as="p" delay={70} className="mt-4 text-lg leading-[1.7] text-velvet-black/65">
              Most clinics don&rsquo;t, and that&rsquo;s completely normal. That&rsquo;s exactly what
              the free assessment is for. We&rsquo;ll tell you what your clinic needs, and just as
              importantly, what it doesn&rsquo;t.
            </Reveal>
          </div>
        </section>

        {/* 6 — Final CTA (matches the homepage CTA band) */}
        <section className="relative overflow-hidden bg-healthcare-blue py-20 text-white-cap sm:py-24">
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
              Let&rsquo;s Find Out What Your Clinic Needs
            </Reveal>
            <Reveal as="p" delay={70} className="mt-4 text-lg leading-[1.7] text-white-cap/80">
              Book a free security assessment. No obligation, no pressure, no jargon.
            </Reveal>
            <Reveal delay={130} className="mt-9">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-white-cap px-7 py-3.5
                           text-base font-semibold text-healthcare-blue
                           shadow-[0_16px_40px_-12px_rgba(0,0,0,0.45)]
                           transition-[transform,background-color,color,box-shadow] duration-200
                           ease-[var(--ease-spring)] hover:-translate-y-0.5 hover:bg-teal-accent
                           hover:text-velvet-black hover:shadow-[0_20px_46px_-12px_rgba(36,188,188,0.5)]
                           active:translate-y-0 active:scale-[0.98]"
              >
                Book a Free Security Assessment
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
