import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez notre mission, notre vision, nos valeurs et notre approche : un partenaire technologique qui combine stratégie, design et technologie.",
};

const values = [
  {
    title: "UX/UI",
    description:
      "Des interfaces pensées pour être intuitives, accessibles et agréables à utiliser.",
  },
  {
    title: "Technologie",
    description: "Des architectures modernes, sécurisées et évolutives.",
  },
  {
    title: "Performance",
    description:
      "Optimisation du temps de chargement, SEO technique et Core Web Vitals.",
  },
  {
    title: "Accompagnement",
    description:
      "Accompagnement du cadrage jusqu&apos;au déploiement et à l&apos;évolution du produit.",
  },
];

const pillars = [
  { title: "Stratégie", description: "Comprendre avant de développer." },
  { title: "Design", description: "Créer des expériences intuitives." },
  { title: "Technologie", description: "Construire des solutions fiables et évolutives." },
];

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Un partenaire technologique, pas un simple prestataire."
        description="Nous concevons des expériences et des produits digitaux qui contribuent à la croissance des entreprises, en combinant stratégie, UX/UI, technologie et performance."
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "À propos" }]}
      />

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">Notre mission</h2>
            <p className="mt-4 text-base leading-relaxed text-gray">
              Transformer les idées, besoins métier et problématiques business de
              nos clients en solutions digitales performantes — sites web,
              applications web et mobiles conçus pour développer leur activité,
              améliorer leur expérience client et accélérer leur croissance.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">Notre vision</h2>
            <p className="mt-4 text-base leading-relaxed text-gray">
              Être reconnus comme une agence moderne, technologique, fiable et
              créative, capable de développer des produits digitaux complexes et
              de devenir, pour chaque client, un véritable partenaire de
              croissance plutôt qu&apos;un simple exécutant.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="neutral">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">Notre approche</h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <h3 className="text-lg font-semibold text-orange">{pillar.title}</h3>
              <p className="mt-2 text-sm text-gray">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">Nos valeurs</h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title}>
              <h3 className="text-lg font-semibold text-navy">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="neutral">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">Nos expertises</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section tone="light">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">Notre équipe</h2>
          <p className="mt-4 text-base leading-relaxed text-gray">
            Une équipe pluridisciplinaire réunissant stratégie, UX/UI design,
            développement front-end et back-end, et accompagnement projet —
            mobilisée du cadrage jusqu&apos;à l&apos;évolution de chaque produit digital.
          </p>
        </div>
      </Section>

      <FinalCtaSection />
    </>
  );
}
