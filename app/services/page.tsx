import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { MethodSection } from "@/components/sections/MethodSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sites web, applications web, applications mobiles, UI/UX design et solutions sur mesure : découvrez l'ensemble de nos expertises digitales.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Des expertises digitales complètes, du cadrage à l'évolution."
        description="Stratégie, design et technologie combinés pour transformer vos besoins métier en solutions digitales performantes."
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Services" }]}
      />

      <Section tone="light">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Des solutions digitales pensées pour votre croissance.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <MethodSection title="Notre approche pour chaque projet." />
      <TechStackSection />
      <ProjectsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
