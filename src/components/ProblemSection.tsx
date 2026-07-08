import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatInfographic from "@/components/StatInfographic";

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

        <StatInfographic />

        <Reveal delay={120} className="mt-12 text-center">
          <p className="text-lg font-medium text-velvet-black">
            This is exactly what RanVault protects your clinic from.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
