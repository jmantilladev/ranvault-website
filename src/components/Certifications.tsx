import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

/**
 * Section 11 — Credentials & Certifications. Replaces the old trust "StatBand".
 * All 11 credential logos on a light gray surface, shown at full color (color
 * conveys authority here, unlike the grayscale client marquee). Each logo is
 * normalized to ~80px tall with natural width and scales up subtly on hover.
 * Intrinsic width/height are the real PNG dimensions so Next.js keeps aspect
 * ratios correct while `h-20 w-auto` pins the display height.
 */
type Cert = { src: string; alt: string; w: number; h: number; big?: boolean };

// Split into two explicit rows so the display always reads as a clean 2-row grid
// on desktop. Row 1 holds the compact badges; row 2 carries the wider wordmark
// logos (OWASP / MITRE / HIPAA Journal) that would otherwise overflow.
const ROW_1: Cert[] = [
  { src: "/certifications/CHPS.png", alt: "CHPS — Certified in Healthcare Privacy and Security", w: 600, h: 600 },
  { src: "/certifications/CISSP.png", alt: "CISSP — Certified Information Systems Security Professional", w: 512, h: 512 },
  { src: "/certifications/HCISSP.png", alt: "HCISPP — HealthCare Information Security and Privacy Practitioner", w: 672, h: 352 },
  { src: "/certifications/OSCP.png", alt: "OSCP — Offensive Security Certified Professional", w: 512, h: 512 },
  { src: "/certifications/OSEP.png", alt: "OSEP — Offensive Security Experienced Penetration Tester", w: 672, h: 352 },
  { src: "/certifications/OSWE.png", alt: "OSWE — Offensive Security Web Expert", w: 512, h: 512 },
];

const ROW_2: Cert[] = [
  { src: "/certifications/OSWP.png", alt: "OSWP — Offensive Security Wireless Professional", w: 512, h: 512 },
  { src: "/certifications/Owasp.png", alt: "OWASP", w: 1000, h: 348 },
  { src: "/certifications/mitre.png", alt: "MITRE ATT&CK", w: 2560, h: 817 },
  { src: "/certifications/The-HIPAA-Journal-Logo-1-scaled.png", alt: "The HIPAA Journal", w: 2560, h: 780 },
  { src: "/certifications/CCNA.png", alt: "CCNA — Cisco Certified Network Associate", w: 352, h: 352, big: true },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-t border-velvet-black/5 bg-[#f1f3f5]"
    >
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-28 sm:px-8 sm:pt-24 sm:pb-32">
        <SectionHeading
          align="center"
          eyebrow="Credentials & Certifications"
          title="The Expertise Behind Your Protection"
          subtitle="Our team holds the certifications that matter most in healthcare cybersecurity."
        />

        <div className="mt-14 flex flex-col gap-y-10 sm:mt-16 sm:gap-y-12">
          {[ROW_1, ROW_2].map((row, ri) => (
            <Reveal
              as="ul"
              key={ri}
              delay={140 + ri * 90}
              className="flex flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-x-10"
            >
              {row.map((cert) => (
                <li
                  key={cert.src}
                  className="flex h-20 w-24 items-center justify-center sm:h-24 sm:w-36"
                >
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={cert.w}
                    height={cert.h}
                    className={`max-w-full object-contain transition-transform duration-300
                               ease-[var(--ease-spring)] hover:scale-105 ${
                                 cert.big ? "max-h-[4.6rem] sm:max-h-[5.75rem]" : "max-h-16 sm:max-h-20"
                               }`}
                  />
                </li>
              ))}
            </Reveal>
          ))}
        </div>
      </div>

      {/* Soft wave carrying the eye into the blue MidCta band below. */}
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
