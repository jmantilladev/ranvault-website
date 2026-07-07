import type { SVGProps } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { IconFileLock, IconUsersGap, IconScale } from "@/components/icons";

type PainPoint = {
  Icon: (p: SVGProps<SVGSVGElement>) => React.ReactElement;
  title: string;
  body: string;
};

const PAIN_POINTS: PainPoint[] = [
  {
    Icon: IconFileLock,
    title: "Highly sensitive data",
    body: "Therapy notes and behavioral health records carry extra legal protection (42 CFR Part 2) and are especially damaging if exposed.",
  },
  {
    Icon: IconUsersGap,
    title: "No internal security team",
    body: "Most clinics of this size can't justify a full-time CISO or IT security hire.",
  },
  {
    Icon: IconScale,
    title: "Compliance risk compounds the damage",
    body: "A breach isn't just a security incident. It can trigger HIPAA violations, fines, and loss of patient trust.",
  },
];

/** Section 8 — Problem / Pain ("Behavioral Health Clinics Are a Growing Target"). */
export default function ProblemSection() {
  return (
    <section id="problem" className="border-t border-velvet-black/5 bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="The Reality for Clinics Today"
          title="Behavioral Health Clinics Are a Growing Target"
          subtitle={
            <>
              Sensitive patient records, small IT budgets, and no dedicated security team.
              <br />
              It&rsquo;s a combination cybercriminals are increasingly exploiting.
            </>
          }
          className="mx-auto"
        />

        {/* Section image — swap src to change (public/media/clinic-office.png). */}
        <Reveal delay={80} className="mx-auto mt-12 max-w-4xl sm:mt-14">
          <figure className="relative overflow-hidden rounded-2xl border border-velvet-black/[0.06] shadow-[0_2px_4px_rgba(39,39,39,0.04),0_22px_46px_-26px_rgba(16,99,140,0.24)]">
            <Image
              src="/media/clinic-office.png"
              alt="A behavioral health clinic office"
              width={1535}
              height={1024}
              className="aspect-[16/7] w-full object-cover"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-healthcare-blue/10" />
          </figure>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3">
          {PAIN_POINTS.map(({ Icon, title, body }, i) => (
            <Reveal
              key={title}
              delay={i * 70}
              className="group h-full rounded-2xl border border-velvet-black/[0.06] bg-white p-7
                         shadow-[0_1px_2px_rgba(39,39,39,0.04),0_8px_16px_-10px_rgba(16,99,140,0.12),0_22px_46px_-26px_rgba(16,99,140,0.24)]
                         transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease-spring)]
                         hover:-translate-y-1.5 hover:border-teal-accent/30
                         hover:shadow-[0_2px_4px_rgba(39,39,39,0.05),0_30px_56px_-24px_rgba(36,188,188,0.34)]"
            >
              <span
                className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br
                           from-healthcare-blue/[0.07] to-teal-accent/[0.12] text-teal-accent
                           ring-1 ring-inset ring-teal-accent/15 shadow-[0_6px_16px_-6px_rgba(36,188,188,0.30)]
                           transition-[transform,box-shadow] duration-300 ease-[var(--ease-spring)]
                           group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_22px_-8px_rgba(36,188,188,0.42)]"
              >
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em] text-velvet-black">
                {title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.65] text-velvet-black/65">{body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 text-center">
          <p className="text-lg font-medium text-velvet-black">
            That&rsquo;s the gap RanVault exists to close.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
