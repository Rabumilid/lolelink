import { GradientWrapper, SectionTwo, KeyFeatures, WhyChooseUs, HowItWorks, Footer } from "@/components";
import { Header } from "@/components";
import { Hero } from "@/components";
import { CallToAction } from "@/components/sections/call-to-action";
import { FAQ } from "@/components/sections/faq";
import DashboardPreview from "@/components/sections/dashboard-preview";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <GradientWrapper>
        <div className="pt-24">
          <Hero />
        </div>
      </GradientWrapper>
      <main className="bg-white">
        <DashboardPreview/>
        <SectionTwo/>
        <KeyFeatures/>
        <WhyChooseUs/>
        <HowItWorks/>
        <FAQ/>
        <CallToAction/>
      </main>
      <Footer/>
    </div>
  );
}
