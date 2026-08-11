import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { MethodSection } from "@/components/sections/MethodSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Méthode",
  description:
    "Discovery, UX/UI Design, développement, tests, déploiement, évolution : découvrez notre méthode de travail, du cadrage à la mise en production.",
};

const principles = ["Design", "UX", "Technologie", "SEO", "Conversion"];

export default function MethodePage() {
  return (
    <>
      <PageHero
        eyebrow="Notre méthode"
        title="Une méthode claire. Un projet maîtrisé."
        description="Chaque projet suit un processus structuré, du cadrage fonctionnel à l'évolution continue du produit, avec un livrable identifié à chaque étape."
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Méthode" }]}
      />

      <MethodSection title="Le détail de chaque étape." />

      <Section tone="dark">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Notre principe directeur</h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-lg font-semibold sm:text-xl">
            {principles.map((principle, index) => (
              <span key={principle} className="flex items-center gap-4">
                <span className="text-white">{principle}</span>
                {index < principles.length - 1 && (
                  <span className="text-orange" aria-hidden="true">+</span>
                )}
              </span>
            ))}
          </div>
          <p className="mt-8 text-2xl font-bold text-orange sm:text-3xl">
            = Site web commercial performant
          </p>
        </div>
      </Section>

      <FinalCtaSection />
    </>
  );
}
