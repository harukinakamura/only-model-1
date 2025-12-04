import { CallToActionSection } from "@/components/cta-section";
import { ComprehensiveGrowth } from "@/components/comprehensive-growth";
import { DoneForYouSection } from "@/components/done-for-you-section";
import { FAQSection } from "@/components/faq-section";
import { FeaturedSection } from "@/components/featured-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { RealStrugglesSection } from "@/components/real-struggles-section";
import { ScrollToSection } from "@/components/scroll-to-section";
import { ServicesDetail } from "@/components/services-detail";
import { StepsToStartSection } from "@/components/steps-to-start-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TopCreatorsSection } from "@/components/top-creators-section";
import { TransparencySection } from "@/components/transparency-section";
import { WhyOnlyModelsSection } from "@/components/why-onlymodels-section";
import { WorkflowSection } from "@/components/workflow-section";

export type PageType = "home" | "about" | "blog" | "contact";

export type HomeRootProps = {
  pageType?: PageType;
};

export function HomeRoot({ pageType = "home" }: HomeRootProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* <ScrollToSection targetId={initialSection} /> */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent-secondary/30 blur-[220px]" />
      </div>
      <Header />
      <main className="relative z-10 flex flex-col">
        {pageType === "home" && (
          <>
            <HeroSection />
            <FeaturedSection />
            <TopCreatorsSection />
          </>
        )}

        {pageType === "about" && (
          <>
            <WhyOnlyModelsSection />
            <TransparencySection />
            <ServicesDetail />
            <ComprehensiveGrowth />
            <FeaturesSection />
            <WorkflowSection />
            <RealStrugglesSection />
            <FAQSection />
          </>
        )}

        {pageType === "blog" && (
          <>
            <TestimonialsSection />
          </>
        )}

        {pageType === "contact" && (
          <>
            <CallToActionSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
