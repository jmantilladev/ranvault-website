import Reveal from "@/components/Reveal";
import { cx } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  /** "invert" for use on dark / Healthcare-Blue backgrounds. */
  tone?: "default" | "invert";
  className?: string;
};

/**
 * Consistent eyebrow → headline → subheadline block shared by every section so
 * type scale, spacing, and entrance stagger stay cohesive with the hero.
 * Eyebrow uses Healthcare Blue on light backgrounds (accessible) / Teal on dark.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "default",
  className,
}: SectionHeadingProps) {
  const invert = tone === "invert";
  return (
    <div
      className={cx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal
          as="p"
          className={cx(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            invert ? "text-teal-accent" : "text-healthcare-blue",
          )}
        >
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={eyebrow ? 70 : 0}
        className={cx(
          "mt-4 text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.035em] sm:text-[2.5rem] lg:text-[2.8rem]",
          invert ? "text-white-cap" : "text-velvet-black",
        )}
      >
        {title}
      </Reveal>
      {subtitle && (
        <Reveal
          as="p"
          delay={eyebrow ? 130 : 80}
          className={cx(
            "mt-5 text-balance text-lg font-normal leading-[1.7]",
            invert ? "text-white-cap/75" : "text-velvet-black/60",
          )}
        >
          {subtitle}
        </Reveal>
      )}
    </div>
  );
}
