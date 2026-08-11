import Link from "next/link";
import type { Project } from "@/content/realisations";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-light-gray bg-white transition-shadow duration-300 hover:shadow-lg">
      <div className="aspect-[4/3] w-full bg-gradient-to-br from-navy to-navy/70" />
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-orange">
          {project.category}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-navy">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray">
          {project.description}
        </p>
        {project.technologies.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-light-gray px-3 py-1 text-xs font-medium text-navy"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
        <Link
          href={`/realisations/${project.slug}`}
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-orange hover:underline"
        >
          Voir le projet →
        </Link>
      </div>
    </div>
  );
}
