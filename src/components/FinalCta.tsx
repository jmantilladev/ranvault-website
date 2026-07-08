"use client";

import { FormEvent, useState } from "react";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { IconShieldCheck } from "@/components/icons";

const BULLETS = [
  "30-minute assessment, on your schedule",
  "A clear, honest report of your real risks",
  "No obligation to buy anything",
];

// heropatterns "Hexagons" — same subtle texture as the homepage hero.
const HEX_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cpath fill='%23ffffff' fill-rule='evenodd' d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/svg%3E\")";

/**
 * Section 14 — Final CTA + Form (3 fields: Name, Work Email, Clinic Name).
 *
 * NOTE: the submit handler is a PLACEHOLDER. It currently just shows a local
 * success state and does not send the lead anywhere. Wire `handleSubmit` to the
 * real backend / CRM endpoint (e.g. HubSpot forms API) before launch.
 */
export default function FinalCta() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: POST form data to the real CRM/backend endpoint here.
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-healthcare-blue py-20 text-white-cap sm:py-28 lg:py-32"
    >
      {/* Layered depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(46% 50% at 92% 6%, rgba(36,188,188,0.22) 0%, rgba(36,188,188,0) 70%)",
            "radial-gradient(60% 60% at 4% 108%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0) 58%)",
            "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 22%, rgba(0,0,0,0.18) 100%)",
          ].join(","),
        }}
      />
      {/* Subtle hex texture — matches the homepage hero's crafted feel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: HEX_BG, backgroundSize: "42px 74px" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* LEFT — the pitch */}
        <div className="max-w-xl">
          <Reveal
            as="h2"
            className="text-balance text-4xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem] lg:text-5xl"
          >
            Let&rsquo;s Secure Your Clinic
          </Reveal>
          <Reveal as="p" delay={70} className="mt-4 text-lg leading-[1.7] text-white-cap/80">
            Thirty minutes, no sales pitch, just an honest look at where your clinic stands.
          </Reveal>

          <Reveal as="ul" delay={120} className="mt-8 space-y-3.5">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15px] leading-[1.5] text-white-cap/90">
                <CheckCircle weight="fill" className="mt-[2px] h-5 w-5 shrink-0 text-teal-accent" />
                <span>{b}</span>
              </li>
            ))}
          </Reveal>

          <Reveal as="p" delay={170} className="mt-6 text-sm leading-[1.6] text-white-cap/60">
            Book below and we&rsquo;ll reach out within one business day to schedule.
          </Reveal>

          <Reveal
            delay={210}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white-cap/15 pt-6"
          >
            {["HIPAA", "42 CFR Part 2"].map((s) => (
              <span key={s} className="inline-flex items-center gap-2 text-sm font-medium text-white-cap/85">
                <IconShieldCheck className="h-4 w-4 text-teal-accent" />
                {s}
              </span>
            ))}
          </Reveal>
        </div>

        {/* RIGHT — the form (focal point) */}
        <Reveal delay={120}>
          <div
            className="rounded-2xl bg-white-cap p-6 ring-1 ring-white-cap/60 sm:p-8
                       shadow-[0_2px_6px_rgba(0,0,0,0.12),0_36px_80px_-28px_rgba(0,0,0,0.6),0_22px_55px_-26px_rgba(36,188,188,0.32)]"
          >
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-teal-accent/15 text-teal-accent">
                  <IconShieldCheck className="h-7 w-7" />
                </span>
                <p className="mt-5 text-xl font-semibold text-velvet-black">Thank you!</p>
                <p className="mt-2 text-[15px] leading-[1.6] text-velvet-black/65">
                  We&rsquo;ve received your request and will reach out shortly to schedule your
                  free assessment.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <p className="text-lg font-semibold tracking-[-0.01em] text-velvet-black">
                    Book Your Free Assessment
                  </p>
                  <p className="mt-1 text-[13px] text-velvet-black/50">Takes 30 seconds.</p>
                </div>
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                  <Field id="name" label="Name" type="text" autoComplete="name" placeholder="Jane Doe" />
                  <Field
                    id="email"
                    label="Work Email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@yourclinic.com"
                  />
                  <Field
                    id="clinic"
                    label="Clinic Name"
                    type="text"
                    autoComplete="organization"
                    placeholder="Riverside Behavioral Health"
                  />
                  <button
                    type="submit"
                    className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-healthcare-blue px-6 py-4
                               text-base font-semibold text-white-cap
                               shadow-[0_16px_38px_-12px_rgba(16,99,140,0.65)]
                               transition-[transform,background-color,color,box-shadow] duration-200
                               ease-[var(--ease-spring)] hover:-translate-y-0.5 hover:bg-teal-accent
                               hover:text-velvet-black hover:shadow-[0_20px_44px_-12px_rgba(36,188,188,0.6)]
                               active:translate-y-0 active:scale-[0.98]"
                  >
                    Book My Free Assessment
                  </button>
                  <p className="flex items-center justify-center gap-1.5 text-center text-[13px] text-velvet-black/60">
                    <IconShieldCheck className="h-3.5 w-3.5 shrink-0 text-teal-accent" />
                    No obligation. We&rsquo;ll never share your information.
                  </p>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-velvet-black">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="rounded-xl border border-velvet-black/15 bg-white px-4 py-3 text-[15px] text-velvet-black
                   placeholder:text-velvet-black/35 transition-colors duration-200 ease-[var(--ease-spring)]
                   hover:border-velvet-black/25 focus:border-healthcare-blue focus:outline-none
                   focus-visible:outline-none"
      />
    </div>
  );
}
