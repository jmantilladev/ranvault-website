import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type Strength = {
  n: string;
  title: string;
  summary: string;
  /** Row 03 — render the "15+" figure large as the row's focal point. */
  stat?: string;
  /** Row 02 — show certification badges in place of a long description. */
  badges?: boolean;
};

const STRENGTHS: Strength[] = [
  {
    n: "01",
    title: "Behavioral Health Is All We Do",
    summary:
      "Not hospitals. Not law firms. Only behavioral health, including the 42 CFR Part 2 rules most IT providers don't even know exist.",
  },
  {
    n: "02",
    title: "Certified Experts, Not General IT",
    summary: "Real healthcare security credentials, not general computer techs.",
    badges: true,
  },
  {
    n: "03",
    title: "Years Protecting Healthcare Data",
    summary: "Hands-on experience defending healthcare against real threats.",
    stat: "15+",
  },
  {
    n: "04",
    title: "You Talk to an Expert, Not a Ticket Queue",
    summary: "Reach a senior security professional directly. No call centers, no queues.",
  },
];

const BADGES = [
  { src: "/certifications/CHPS.png", alt: "CHPS certification", w: 600, h: 600 },
  { src: "/certifications/CISSP.png", alt: "CISSP certification", w: 512, h: 512 },
  { src: "/certifications/HCISSP.png", alt: "HCISPP certification", w: 672, h: 352 },
];

/**
 * Section 10 — Why RanVault. Numbered, left-aligned editorial list: large
 * teal-outline numerals set the rhythm while each row mixes content types
 * (text, credential badges, a headline stat) to read as a designed spread.
 */
export default function WhyRanVault() {
  return (
    <section
      id="why-ranvault"
      className="border-t border-velvet-black/5 py-20 sm:py-28 lg:py-32"
      style={{ backgroundColor: "rgba(16,99,140,0.035)" }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title="Why Clinics Choose Us" />

        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[1fr_30rem] lg:items-center lg:gap-16">
          <ul className="space-y-12 sm:space-y-16">
          {STRENGTHS.map(({ n, title, summary, stat, badges }, i) => (
            <Reveal as="li" key={n} delay={i * 80} className="flex gap-5 sm:gap-8">
              <span
                aria-hidden="true"
                className="shrink-0 select-none text-[2.75rem] font-bold leading-none tabular-nums
                           text-transparent [-webkit-text-stroke:1.5px_rgba(36,188,188,0.55)] sm:text-[3.5rem]"
              >
                {n}
              </span>

              <div className="pt-1 sm:pt-1.5">
                {stat ? (
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-[2.5rem] font-bold leading-none tracking-[-0.02em] text-healthcare-blue sm:text-[3rem]">
                      {stat}
                    </span>
                    <h3 className="text-lg font-semibold tracking-[-0.01em] text-velvet-black sm:text-xl">
                      {title}
                    </h3>
                  </div>
                ) : (
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-velvet-black sm:text-xl">
                    {title}
                  </h3>
                )}

                <p className="mt-2 max-w-xl text-[14px] leading-[1.6] text-velvet-black/65 sm:text-[15px]">
                  {summary}
                </p>

                {badges && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {BADGES.map((b) => (
                      <div key={b.src} className="flex h-14 w-24 items-center justify-center">
                        <Image
                          src={b.src}
                          alt={b.alt}
                          width={b.w}
                          height={b.h}
                          className="max-h-11 max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
          </ul>

          {/* Right column — brand imagery balancing the four strengths */}
          <div className="flex flex-col gap-5">
            <Reveal>
              <figure className="relative overflow-hidden rounded-2xl border border-velvet-black/[0.06] shadow-[0_2px_4px_rgba(39,39,39,0.04),0_22px_46px_-26px_rgba(16,99,140,0.24)]">
                <Image
                  src="/media/partners_pic.png"
                  alt="RanVault's two founders in the RanVault office"
                  width={1000}
                  height={700}
                  className="h-auto w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-healthcare-blue/[0.08]"
                />
              </figure>
            </Reveal>
            <Reveal delay={90}>
              <figure className="relative overflow-hidden rounded-2xl border border-velvet-black/[0.06] shadow-[0_2px_4px_rgba(39,39,39,0.04),0_22px_46px_-26px_rgba(16,99,140,0.24)]">
                <Image
                  src="/media/logo-circuit.png"
                  alt="The RanVault security mark glowing on a circuit board"
                  width={1448}
                  height={1086}
                  className="aspect-[16/9] w-full object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
