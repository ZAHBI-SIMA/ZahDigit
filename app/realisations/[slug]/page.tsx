import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { projects, getProjectBySlug } from "@/content/realisations";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
  };
}

const metaFields: { key: keyof typeof projects[number]; label: string }[] = [
  { key: "sector", label: "Secteur" },
  { key: "client", label: "Client" },
  { key: "year", label: "Année" },
  { key: "duration", label: "Durée" },
  { key: "projectType", label: "Type de projet" },
];

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const availableMeta = metaFields.filter(({ key }) => project[key]);

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.name}
        description={project.description}
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Réalisations", href: "/realisations" },
          { label: project.name },
        ]}
      >
        {project.liveUrl && (
          <Button
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mt-8"
          >
            Voir le site en ligne ↗
          </Button>
        )}

        {availableMeta.length > 0 && (
          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-5">
            {availableMeta.map(({ key, label }) => (
              <div key={key}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-white/50">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-white">
                  {String(project[key])}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </PageHero>

      {project.coverImage && (
        <Section tone="light" className="pt-16 pb-0 sm:pt-20">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-light-gray sm:aspect-[16/9]">
            <Image
              src={project.coverImage}
              alt={`Aperçu du projet ${project.name}`}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </Section>
      )}

      {project.problem && (
        <Section tone="light">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Problématique</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray">
            {project.problem}
          </p>
        </Section>
      )}

      {project.objectives && project.objectives.length > 0 && (
        <Section tone="neutral">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Objectifs</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.objectives.map((objective) => (
              <li
                key={objective}
                className="rounded-xl border border-light-gray bg-white px-5 py-4 text-sm text-navy"
              >
                {objective}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {project.solution && (
        <Section tone="light">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Solution</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray">
            {project.solution}
          </p>
        </Section>
      )}

      {project.features && project.features.length > 0 && (
        <Section tone="neutral">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Fonctionnalités</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="rounded-xl border border-light-gray bg-white px-5 py-4 text-sm text-navy"
              >
                {feature}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {project.uxui && (
        <Section tone="light">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">UX/UI</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray">
            {project.uxui}
          </p>
        </Section>
      )}

      {project.technologies.length > 0 && (
        <Section tone="neutral">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Technologies</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-navy"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {project.results && project.results.length > 0 && (
        <Section tone="dark">
          <h2 className="text-2xl font-bold sm:text-3xl">Résultats</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {project.results.map((result) => (
              <div key={result.label}>
                <p className="text-3xl font-bold text-orange">{result.value}</p>
                <p className="mt-1 text-sm text-white/70">{result.label}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <Section tone="light">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Galerie</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.gallery.map((image) => (
              <div
                key={image}
                className="relative aspect-video overflow-hidden rounded-xl border border-light-gray"
              >
                <Image
                  src={image}
                  alt={`Capture d'écran supplémentaire du projet ${project.name}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </Section>
      )}

      <FinalCtaSection />
    </>
  );
}
