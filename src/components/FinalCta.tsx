"use client";

import { FormEvent, useState } from "react";
import Reveal from "@/components/Reveal";
import { IconShieldCheck } from "@/components/icons";

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

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="max-w-xl">
          <Reveal
            as="h2"
            className="text-pretty text-3xl font-semibold leading-[1.12] tracking-[-0.025em] sm:text-4xl"
          >
            Let&rsquo;s Secure Your Clinic
          </Reveal>
          <Reveal as="p" delay={70} className="mt-4 text-lg leading-[1.7] text-white-cap/80">
            Book a free assessment. It takes less than 30 minutes.
          </Reveal>
          <Reveal delay={130} className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {["HIPAA", "42 CFR Part 2"].map((s) => (
              <span key={s} className="inline-flex items-center gap-2 text-sm text-white-cap/85">
                <IconShieldCheck className="h-4 w-4 text-teal-accent" />
                {s}
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="rounded-2xl bg-white-cap p-6 shadow-[0_30px_70px_-24px_rgba(0,0,0,0.55)] sm:p-8">
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
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-healthcare-blue px-6 py-3.5
                             text-base font-semibold text-white-cap
                             shadow-[0_14px_34px_-12px_rgba(16,99,140,0.6)]
                             transition-[transform,background-color,color,box-shadow] duration-200
                             ease-[var(--ease-spring)] hover:-translate-y-0.5 hover:bg-teal-accent
                             hover:text-velvet-black hover:shadow-[0_18px_40px_-12px_rgba(36,188,188,0.55)]
                             active:translate-y-0 active:scale-[0.98]"
                >
                  Book My Free Assessment
                </button>
                <p className="text-center text-xs text-velvet-black/45">
                  No obligation. We&rsquo;ll never share your information.
                </p>
              </form>
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
