"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Why RanVault", href: "#why-ranvault" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

/**
 * Official horizontal lockup (icon + wordmark), Healthcare Blue, on the light
 * nav bar — brand-recommended nav treatment. Single solid color per guidelines.
 * Source: brand_assets/Asset 22@2x.png.
 */
function Logo() {
  return (
    <a
      href="#"
      aria-label="RanVault home"
      className="inline-flex items-center transition-opacity duration-200
                 ease-[var(--ease-spring)] hover:opacity-80 focus-visible:opacity-80"
    >
      <Image
        src="/ranvault-logo-horizontal.png"
        alt="RanVault"
        width={132}
        height={33}
        priority
        className="h-8 w-auto"
      />
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div
        className="border-b border-velvet-black/5 bg-white-cap/80 backdrop-blur-md
                   supports-[backdrop-filter]:bg-white-cap/70"
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
        >
          <Logo />

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-velvet-black/80
                             transition-colors duration-200 ease-[var(--ease-spring)]
                             hover:text-healthcare-blue focus-visible:text-healthcare-blue
                             after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full
                             after:origin-left after:scale-x-0 after:bg-teal-accent
                             after:transition-transform after:duration-200 after:ease-[var(--ease-spring)]
                             hover:after:scale-x-100 focus-visible:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA — distinct weight from nav links */}
          <a
            href="#contact"
            className="hidden items-center rounded-full bg-healthcare-blue px-5 py-2.5 text-sm
                       font-semibold text-white-cap shadow-[0_8px_20px_-8px_rgba(16,99,140,0.6)]
                       transition-[transform,background-color,box-shadow] duration-200 ease-[var(--ease-spring)]
                       hover:-translate-y-0.5 hover:bg-teal-accent hover:text-velvet-black
                       hover:shadow-[0_12px_26px_-8px_rgba(36,188,188,0.55)]
                       active:translate-y-0 md:inline-flex"
          >
            Talk to an Expert
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg
                       text-velvet-black transition-colors duration-200 ease-[var(--ease-spring)]
                       hover:bg-velvet-black/5 active:bg-velvet-black/10 md:hidden"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile dropdown */}
        {open && (
          <div className="border-t border-velvet-black/5 bg-white-cap md:hidden">
            <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-base font-medium text-velvet-black/80
                               transition-colors duration-200 ease-[var(--ease-spring)]
                               hover:bg-velvet-black/5 hover:text-healthcare-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-healthcare-blue px-5 py-3 text-center text-sm
                             font-semibold text-white-cap transition-colors duration-200
                             ease-[var(--ease-spring)] hover:bg-teal-accent hover:text-velvet-black"
                >
                  Talk to an Expert
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
