export type ProjectResult = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  sector?: string;
  client?: string;
  year?: number;
  duration?: string;
  projectType?: string;
  technologies: string[];
  description: string;
  problem?: string;
  objectives?: string[];
  solution?: string;
  features?: string[];
  uxui?: string;
  /** KPI réels uniquement — ne jamais inventer de chiffre. Laisser vide tant qu'aucune donnée vérifiée n'est fournie par le client. */
  results?: ProjectResult[];
  coverImage?: string;
  gallery?: string[];
};

// Contenu à compléter avec les projets réels de l'agence (visuels, technologies,
// résultats vérifiés). L'entrée ci-dessous reprend l'exemple fourni dans le
// cahier des charges (§12) à titre de structure de référence.
export const projects: Project[] = [
  {
    slug: "myclasslink",
    name: "MyClassLink",
    category: "EdTech / Web App",
    technologies: [],
    description:
      "Plateforme digitale destinée à faciliter la gestion et la communication dans l'environnement scolaire.",
    results: [],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
