import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/content/realisations";

export function ProjectsSection() {
  return (
    <Section tone="light">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
          Des projets conçus pour avoir un impact.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button href="/realisations" variant="secondary" size="lg">
          Voir toutes les réalisations →
        </Button>
      </div>
    </Section>
  );
}
