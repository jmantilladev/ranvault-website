import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

/**
 * Section 7 — Meet the Founders. Simple and centered: eyebrow, headline, one
 * line of subtext, and the founder video (native <video>, poster, controls;
 * no autoplay, no loop). Media served from public/media/.
 */
export default function FounderVideo() {
  return (
    <section id="founders" className="bg-white-cap pt-10 pb-20 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Meet the Founders"
          title="Why We Built RanVault"
          subtitle="Jorge and Mario explain why behavioral health clinics deserve enterprise-grade security, without the enterprise price tag."
          className="mx-auto"
        />

        <Reveal delay={120} className="mt-12 sm:mt-14">
          <div className="mx-auto w-full max-w-[800px]">
            <div
              className="overflow-hidden rounded-2xl border border-velvet-black/5
                         shadow-[0_2px_4px_rgba(39,39,39,0.04),0_30px_60px_-24px_rgba(16,99,140,0.28)]"
            >
              <video
                controls
                preload="metadata"
                playsInline
                poster="/media/vid1cover.jpg"
                className="aspect-video h-full w-full bg-velvet-black object-cover"
              >
                <source src="/media/vid1.mp4" type="video/mp4" />
                Your browser doesn&rsquo;t support the video tag.
              </video>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
