import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import FounderVideo from "@/components/FounderVideo";
import ProblemSection from "@/components/ProblemSection";
import Services from "@/components/Services";
import WhyRanVault from "@/components/WhyRanVault";
import StatBand from "@/components/StatBand";
import MidCta from "@/components/MidCta";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <FounderVideo />
        <ProblemSection />
        <Services />
        <WhyRanVault />
        <StatBand />
        <MidCta />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
