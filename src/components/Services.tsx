import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import {
  SealCheck,
  Eye,
  GraduationCap,
  UserFocus,
  MagnifyingGlass,
  Stack,
  Robot,
} from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { IconArrowRight } from "@/components/icons";

type Service = {
  Icon: PhosphorIcon;
  title: string;
  body: string;
};

const SERVICES: Service[] = [
  {
    Icon: SealCheck,
    title: "HIPAA & Compliance Made Simple",
    body: "We guide you through HIPAA and 42 CFR Part 2 from start to finish. We find your gaps, build the documentation, and get you audit-ready, then keep you compliant as rules change, so you're never scrambling before an inspection.",
  },
  {
    Icon: Eye,
    title: "Around-the-Clock Threat Monitoring",
    body: "We watch your systems continuously so threats get caught and stopped before they become breaches. You won't be buried in confusing alerts. When something real happens, we handle it and keep you informed every step of the way.",
  },
  {
    Icon: GraduationCap,
    title: "Staff Training That Actually Sticks",
    body: "Most breaches start with one staff member clicking one bad email. We train your team to spot phishing and handle patient data safely, with short, practical sessions built for busy clinic staff, not boring hour-long lectures they'll forget.",
  },
  {
    Icon: UserFocus,
    title: "Security Leadership Without the Salary",
    body: "You get an experienced security expert guiding your clinic's protection, without paying for a full-time executive. We set the strategy, handle the hard decisions, and keep your leadership informed in plain language, not tech jargon.",
  },
  {
    Icon: MagnifyingGlass,
    title: "Find the Gaps Before Problems Start",
    body: "We test your defenses safely to find weak spots before they can be used against you. You get a clear report of what needs fixing, ranked by what actually matters, plus hands-on help fixing it.",
  },
  {
    Icon: Stack,
    title: "Secure Systems From the Ground Up",
    body: "Whether your clinic runs on local computers, the cloud, or both, we build your systems with security designed in from the start, not bolted on later. That means controlling who can access patient data and keeping it protected everywhere it lives.",
  },
  {
    Icon: Robot,
    title: "Safe AI for Your Clinic",
    body: "More clinics are using AI tools for notes, scheduling, and admin work, but these tools can quietly expose patient data. We help you use AI safely, with clear policies on what's allowed, so you get the benefits without putting patient privacy at risk.",
  },
];

/** Section 9 — Services Overview ("Security Built for Clinics, Not Enterprises"). */
export default function Services() {
  return (
    <section id="services" className="border-t border-velvet-black/5 bg-white-cap py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="What We Do"
          title={
            <>
              Security Built for Clinics,
              <br />
              Not Enterprises
            </>
          }
          subtitle="Everything you need to stay protected and compliant, without hiring an internal security team."
          className="mx-auto"
        />

        <div className="mt-14 flex flex-wrap justify-center gap-6 sm:mt-16">
          {SERVICES.map(({ Icon, title, body }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 70}
              className="group flex h-full basis-full flex-col rounded-2xl border border-velvet-black/[0.06] bg-white p-7
                         sm:basis-[calc(50%_-_0.75rem)] lg:basis-[calc(33.333%_-_1rem)]
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

        <Reveal delay={120} className="mt-12 flex justify-center">
          {/* No dedicated /services page yet — points to the booking section as
              the nearest relevant target. Repoint to "/services" once it exists. */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-velvet-black/15
                       px-6 py-3 text-sm font-semibold text-velvet-black
                       transition-[transform,background-color,border-color] duration-200 ease-[var(--ease-spring)]
                       hover:-translate-y-0.5 hover:border-healthcare-blue/40 hover:bg-healthcare-blue/[0.04]
                       active:translate-y-0 active:scale-[0.98]"
          >
            See All Services
            <IconArrowRight className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-spring)] group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
