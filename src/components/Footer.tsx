import Image from "next/image";
import { IconShieldCheck } from "@/components/icons";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Why RanVault", href: "/#why-ranvault" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact Us", href: "/#contact" },
];

// The five most recognizable credentials, shown as a uniform badge row above the
// copyright. Each logo sits in an identical light chip (same size / radius /
// padding) so mismatched logo aspect ratios still read as one deliberate row,
// and so the dark/black marks (OWASP, MITRE) stay visible on the dark footer.
const FOOTER_CERTS = [
  { src: "/certifications/CHPS.png", alt: "CHPS", w: 600, h: 600 },
  { src: "/certifications/CISSP.png", alt: "CISSP", w: 512, h: 512 },
  { src: "/certifications/HCISSP.png", alt: "HCISPP", w: 672, h: 352 },
  { src: "/certifications/Owasp.png", alt: "OWASP", w: 1000, h: 348 },
  { src: "/certifications/mitre.png", alt: "MITRE ATT&CK", w: 2560, h: 817 },
];

/**
 * Section 15 — Footer (dark / Velvet Black, white reversed logo).
 *
 * PLACEHOLDERS — no real data in the brand/content docs:
 *  - Contact email below is a placeholder; replace with RanVault's real address.
 *  - Social links point to "#"; replace with real profile URLs or remove.
 *  Do not ship these as-is.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white-cap/10 bg-velvet-black text-white-cap">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Image
              src="/ranvault-logo-horizontal-white.png"
              alt="RanVault"
              width={150}
              height={38}
              className="h-9 w-auto"
            />
            <p className="mt-5 text-[15px] leading-[1.7] text-white-cap/60">
              <span className="font-semibold text-white-cap/85">
                Healthcare Secured. Always Assured.
              </span>
              <br />
              Cybersecurity built for behavioral health clinics, not enterprises.
            </p>
            <div className="mt-6 flex gap-3">
              {/* PLACEHOLDER social links — replace hrefs with real profiles. */}
              <SocialLink label="RanVault on LinkedIn">
                <path d="M6.94 8.5H4.5V19h2.44V8.5ZM5.72 4.5a1.42 1.42 0 1 0 0 2.83 1.42 1.42 0 0 0 0-2.83ZM19.5 19v-5.8c0-2.86-1.53-4.2-3.56-4.2a3.07 3.07 0 0 0-2.78 1.53V8.5H10.7V19h2.45v-5.55c0-1.46.28-2.88 2.09-2.88 1.78 0 1.8 1.67 1.8 2.97V19h2.46Z" />
              </SocialLink>
              <SocialLink label="RanVault on X">
                <path d="M17.5 5h2.6l-5.68 6.49L21 19h-5.23l-4.1-5.36L6.98 19H4.38l6.07-6.94L4 5h5.36l3.7 4.9L17.5 5Zm-.91 12.4h1.44L8.48 6.5H6.93l9.66 10.9Z" />
              </SocialLink>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white-cap/45">
              Company
            </h2>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] text-white-cap/70 transition-colors duration-200 ease-[var(--ease-spring)] hover:text-teal-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white-cap/45">
              Get in Touch
            </h2>
            <ul className="mt-4 space-y-3 text-[15px] text-white-cap/70">
              <li>
                <a
                  href="mailto:info@ranvault.com"
                  className="transition-colors duration-200 ease-[var(--ease-spring)] hover:text-teal-accent"
                >
                  info@ranvault.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15122015316"
                  className="transition-colors duration-200 ease-[var(--ease-spring)] hover:text-teal-accent"
                >
                  (512) 201-5316
                </a>
              </li>
              <li className="leading-[1.5] text-white-cap/70">
                5900 Balcones Drive, Ste 100, Austin, TX 78731
              </li>
            </ul>
          </div>
        </div>

        {/* Credential badge row — deliberate, uniform chips above the copyright. */}
        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white-cap/45">
            Certified &amp; Credentialed
          </p>
          <ul className="mt-5 flex flex-wrap gap-3 sm:gap-4">
            {FOOTER_CERTS.map((cert) => (
              <li key={cert.src}>
                <span
                  className="group grid h-16 w-[8.75rem] place-items-center rounded-xl bg-white-cap px-4
                             ring-1 ring-inset ring-black/5
                             transition-transform duration-200 ease-[var(--ease-spring)] hover:-translate-y-0.5"
                >
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={cert.w}
                    height={cert.h}
                    className="max-h-8 w-auto object-contain opacity-80 grayscale
                               transition-[filter,opacity] duration-300 ease-[var(--ease-spring)]
                               group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white-cap/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-x-4 gap-y-2 text-sm text-white-cap/45 sm:flex-row sm:items-center">
            <p>© 2026 RanVault. All rights reserved.</p>
            <span aria-hidden="true" className="hidden text-white-cap/25 sm:inline">·</span>
            <a
              href="/privacy"
              className="transition-colors duration-200 ease-[var(--ease-spring)] hover:text-teal-accent"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="transition-colors duration-200 ease-[var(--ease-spring)] hover:text-teal-accent"
            >
              Terms of Service
            </a>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {["HIPAA", "42 CFR Part 2"].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 text-sm text-white-cap/55">
                <IconShieldCheck className="h-4 w-4 text-teal-accent" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-lg bg-white-cap/[0.06] text-white-cap/70
                 transition-[transform,background-color,color] duration-200 ease-[var(--ease-spring)]
                 hover:-translate-y-0.5 hover:bg-white-cap/10 hover:text-teal-accent active:translate-y-0"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}
