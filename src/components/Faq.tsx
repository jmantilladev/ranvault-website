"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { IconChevronDown } from "@/components/icons";

/**
 * Section 13 — FAQ / Objections. Real objection/rebuttal copy.
 */
const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Our EHR vendor already has us sign a BAA. Aren't we covered?",
    a: "A Business Associate Agreement is one piece of HIPAA compliance, not the whole picture. It covers your vendor's responsibility, not yours. Your clinic is still responsible for access controls, staff training, incident response, and data security practices. Most audits find gaps well beyond what a BAA addresses.",
  },
  {
    q: "What actually happens if we get breached? Will you be there?",
    a: "Yes, and that is exactly what the incident response plan is for. We build it with you before anything happens, so when something does, you have a clear playbook and a direct line to us, not a support ticket queue.",
  },
  {
    q: "How long does onboarding take? We cannot afford downtime.",
    a: "Our initial assessment takes less than 30 minutes of your time. From there, we work around your schedule and your systems. Nothing gets changed without your approval and nothing disrupts clinic operations.",
  },
  {
    q: "We already have an IT company. Why do we need this too?",
    a: "General IT providers handle hardware, software, and help desk support. Cybersecurity compliance for behavioral health is a different discipline, and most IT providers will tell you that directly if you ask. We handle what they do not: HIPAA audits, threat monitoring, 42 CFR Part 2 compliance, and breach response.",
  },
  {
    q: "How is this priced? We are a small clinic.",
    a: "Our plans are built specifically for independent clinics, not hospital systems. Pricing is straightforward, with no surprise fees. The cost of a single breach, including fines, legal exposure, and patient loss, is always higher than prevention. Book a free assessment and we will walk you through what makes sense for your size.",
  },
];

export default function Faq() {
  // First item open by default; clicking a row toggles it.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-velvet-black/5 bg-white-cap py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          /* Heading not specified in the doc for §13 — derived wording, confirm. */
          eyebrow="Common Questions"
          title="Questions Clinics Often Ask Us"
          className="mx-auto"
        />

        <div className="mt-12 divide-y divide-velvet-black/10 border-y border-velvet-black/10">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left
                               transition-colors duration-200 ease-[var(--ease-spring)]
                               hover:text-healthcare-blue"
                  >
                    <span className="text-[17px] font-semibold tracking-[-0.01em] text-velvet-black">
                      {item.q}
                    </span>
                    <IconChevronDown
                      className={`h-5 w-5 shrink-0 text-velvet-black/45 transition-transform duration-200 ease-[var(--ease-spring)] ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                {/* grid-rows 0fr→1fr animates height via transform-free, smooth reveal */}
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[var(--ease-spring)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-9 text-[15px] leading-[1.7] text-velvet-black/65">
                      {item.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
