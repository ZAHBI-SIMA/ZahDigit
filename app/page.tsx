import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { DifferentiationSection } from "@/components/sections/DifferentiationSection";
import { InsuranceCtaSection } from "@/components/sections/InsuranceCtaSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyUsSection />
      <ProjectsSection />
      <MethodSection />
      <InsuranceCtaSection />
      <DifferentiationSection />
      <FinalCtaSection />
    </>
  );
}
