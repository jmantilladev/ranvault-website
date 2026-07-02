import Reveal from "@/components/Reveal";
import { cx } from "@/lib/utils";

/**
 * Section 11 — Trust band. Full-width Velvet Black (#272727) band, three
 * centered fact blocks with Teal (#24BCBC) key phrases. The third statement is
 * larger/bolder so it reads as the standout.
 */
const FACTS: { key: string; rest: string; keyFirst: boolean; standout?: boolean }[] = [
  { key: "HIPAA & 42 CFR Part 2", rest: "Compliant", keyFirst: true },
  { key: "24/7", rest: "Threat Monitoring", keyFirst: true },
  {
    key: "Behavioral Health Clinics",
    rest: "Built Exclusively for",
    keyFirst: false,
    standout: true,
  },
];

export default function StatBand() {
  return (
    <section id="trust-band" className="relative overflow-hidden bg-velvet-black text-white-cap">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-24 sm:px-8 sm:pt-20 sm:pb-28">
        <ul className="grid grid-cols-1 gap-y-10 sm:grid-cols-3 lg:items-center lg:gap-y-0">
          {FACTS.map((fact, i) => (
            <Reveal
              as="li"
              key={fact.key}
              delay={i * 80}
              className="flex flex-col items-center px-6 text-center
                         sm:border-l sm:border-white-cap/10 sm:first:border-l-0"
            >
              <span className="mb-5 block h-0.5 w-8 rounded-full bg-teal-accent" />
              <p
                className={cx(
                  "text-balance leading-[1.18] tracking-[-0.02em]",
                  fact.standout
                    ? "text-[1.75rem] font-bold sm:text-[2.1rem]"
                    : "text-2xl font-semibold sm:text-[1.75rem]",
                )}
              >
                {fact.keyFirst ? (
                  <>
                    <span className="text-teal-accent">{fact.key}</span>{" "}
                    <span className="text-white-cap">{fact.rest}</span>
                  </>
                ) : (
                  <>
                    <span className="text-white-cap">{fact.rest}</span>{" "}
                    <span className="text-teal-accent">{fact.key}</span>
                  </>
                )}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Soft divider flowing into the blue section below */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="block h-[40px] w-full sm:h-[56px]"
        >
          <path d="M0,34 C360,66 1080,66 1440,34 L1440,70 L0,70 Z" fill="#10638c" />
        </svg>
      </div>
    </section>
  );
}
