import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | RanVault",
};

export default function PrivacyPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-white-cap px-5 text-center">
      <div>
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-velvet-black sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-velvet-black/60">Coming soon.</p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm font-semibold text-healthcare-blue transition-colors duration-200 ease-[var(--ease-spring)] hover:text-teal-accent"
        >
          &larr; Back to home
        </Link>
      </div>
    </main>
  );
}
