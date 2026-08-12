import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/realisations";

export function ProjectCard({ project }: { project: Project }) {
  const detailHref = `/realisations/${project.slug}`;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-light-gray bg-white transition-shadow duration-300 hover:shadow-lg">
      <Link
        href={detailHref}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-navy to-navy/70"
      >
        {project.coverImage && (
          <Image
            src={project.coverImage}
            alt={`Aperçu du projet ${project.name}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-orange">
          {project.category}
        </span>
        <Link href={detailHref} className="hover:underline">
          <h3 className="mt-2 text-lg font-semibold text-navy">{project.name}</h3>
        </Link>
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
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-orange hover:underline"
          >
            Voir le projet ↗
          </a>
        ) : (
          <Link
            href={detailHref}
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-orange hover:underline"
          >
            Voir le projet →
          </Link>
        )}
      </div>
    </div>
  );
}
