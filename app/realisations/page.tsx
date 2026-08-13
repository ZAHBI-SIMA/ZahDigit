import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { projects } from "@/content/realisations";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez les projets digitaux conçus par notre agence : sites web, applications web et mobiles pensés pour avoir un impact réel.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Des projets conçus pour avoir un impact."
        description="Une sélection de projets digitaux que nous avons conçus et développés pour nos clients."
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Réalisations" }]}
      />

      <Section tone="light">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <FinalCtaSection />
    </>
  );
}
