import Image from "next/image";
import { IconShieldCheck } from "@/components/icons";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Why RanVault", href: "#why-ranvault" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
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
              Healthcare Secured. Always Assured. Cybersecurity built for behavioral health
              clinics, not enterprises.
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
                  href="mailto:jorge@ranvault.com"
                  className="transition-colors duration-200 ease-[var(--ease-spring)] hover:text-teal-accent"
                >
                  jorge@ranvault.com
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
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white-cap/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white-cap/45">
            © 2026 RanVault. All rights reserved.
          </p>
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
