import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { Target, ClipboardText, Lifebuoy, SealCheck } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type Differentiator = {
  Icon: PhosphorIcon;
  title: string;
  body: string;
};

const DIFFERENTIATORS: Differentiator[] = [
  {
    Icon: Target,
    title: "We Only Work With Behavioral Health Clinics",
    body: "Not hospitals. Not law firms. Not retail. Your clinic's compliance requirements, patient data sensitivities, and operational realities are all we focus on. That depth shows.",
  },
  {
    Icon: ClipboardText,
    title: "You'll Know Exactly Where You Stand",
    body: "After your free assessment, you get a clear report of your real risk exposure. No vague recommendations, no upsell pressure. Just an honest picture of what is protected and what is not.",
  },
  {
    Icon: Lifebuoy,
    title: "If Something Goes Wrong, We Are Already Ready",
    body: "Every client gets a custom incident response plan before anything happens. You will never face a breach scrambling to figure out who to call.",
  },
  {
    Icon: SealCheck,
    title: "Compliance That Holds Up to Scrutiny",
    body: "We build your HIPAA and 42 CFR Part 2 documentation to withstand an actual audit, not just to check a box. When HHS comes knocking, you will be ready.",
  },
];

/** Section 10 — Why RanVault ("Security That Speaks Your Language"). */
export default function WhyRanVault() {
  return (
    <section
      id="why-ranvault"
      className="border-t border-velvet-black/5 py-20 sm:py-28 lg:py-32"
      style={{ backgroundColor: "rgba(16,99,140,0.035)" }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Clinics Choose Us"
          title="Security That Speaks Your Language"
          subtitle="We are specialists who understand behavioral health inside and out, and we communicate in plain terms, not technical jargon."
        />

        {/* Section image — swap src to change (public/media/why.jpg). */}
        <Reveal delay={80} className="mt-10 sm:mt-12">
          <figure className="relative overflow-hidden rounded-2xl border border-velvet-black/[0.06] shadow-[0_2px_4px_rgba(39,39,39,0.04),0_22px_46px_-26px_rgba(16,99,140,0.24)]">
            <Image
              src="/media/security-team.png"
              alt="Two security professionals working at monitors"
              width={1448}
              height={1086}
              className="aspect-[16/6] w-full object-cover"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-healthcare-blue/[0.17]" />
          </figure>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-9 sm:mt-14 sm:grid-cols-2">
          {DIFFERENTIATORS.map(({ Icon, title, body }, i) => (
            <Reveal
              key={title}
              delay={(i % 2) * 70}
              className="group flex gap-5"
            >
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br
                           from-healthcare-blue/[0.07] to-teal-accent/[0.12] text-teal-accent
                           ring-1 ring-inset ring-teal-accent/15 shadow-[0_6px_16px_-6px_rgba(36,188,188,0.30)]
                           transition-[transform,box-shadow] duration-300 ease-[var(--ease-spring)]
                           group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_22px_-8px_rgba(36,188,188,0.42)]"
              >
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-velvet-black">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-velvet-black/65">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
