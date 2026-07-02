import Image from "next/image";

/**
 * Logo marquee — sits directly under the hero for immediate "customers we've
 * served" visibility. The same 7 healthcare logos slide continuously left.
 *
 * Seamless loop: the track renders the set TWICE and CSS translates it -50%
 * (see `.animate-marquee` in globals.css), so the second half seamlessly takes
 * over. Pauses on hover; disabled under prefers-reduced-motion. Edge fades keep
 * logos from hard-cutting at the container edges.
 */
const LOGOS = [1, 2, 3, 4, 5, 6, 7].map((n) => `/clients/logo${n}.png`);

function LogoSet({ hidden }: { hidden?: boolean }) {
  return (
    <>
      {LOGOS.map((src, i) => (
        <li
          key={`${hidden ? "b" : "a"}-${i}`}
          className="mx-8 shrink-0 sm:mx-12"
          aria-hidden={hidden || undefined}
        >
          <Image
            src={src}
            alt=""
            width={400}
            height={400}
            className="h-[6.75rem] w-auto object-contain opacity-60 grayscale
                       transition-[filter,opacity] duration-300 ease-[var(--ease-spring)]
                       hover:opacity-100 hover:grayscale-0 sm:h-[8.25rem]"
          />
        </li>
      ))}
    </>
  );
}

export default function LogoMarquee() {
  return (
    <section
      id="served"
      aria-label="Organizations we've served"
      className="bg-white-cap py-8 sm:py-10"
    >
      <div
        className="group relative overflow-hidden
                   [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]
                   [-webkit-mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]"
      >
        <ul className="animate-marquee flex w-max items-center group-hover:[animation-play-state:paused]">
          <LogoSet />
          <LogoSet hidden />
        </ul>
      </div>
    </section>
  );
}
