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
  /** URL de l'application en ligne — si présente, "Voir le projet" y renvoie directement. */
  liveUrl?: string;
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

// Contenu à compléter avec les projets réels de l'agence (technologies,
// problématique, solution, résultats vérifiés). Les champs non confirmés
// sont volontairement laissés vides plutôt que devinés.
export const projects: Project[] = [
  {
    slug: "myclasslink",
    name: "MyClassLink",
    category: "EdTech / Web App",
    technologies: [],
    description:
      "Plateforme digitale destinée à faciliter la gestion et la communication dans l'environnement scolaire.",
    coverImage: "/MyClassLink.png",
    liveUrl: "https://myclasslink.cloud/",
    results: [],
  },
  {
    slug: "sim-assurances",
    name: "SIM Assurances",
    category: "Assurance / Site web",
    technologies: [],
    description:
      "Site web de la Société Ivoirienne de Micro-Assurances (SIM Assurances), présentant ses solutions d'assurance — santé, voyage et autres — et permettant l'obtention d'un devis en ligne.",
    coverImage: "/Mysimas.png",
    liveUrl: "https://mysimassurances.com/",
    gallery: ["/sira.png"],
    results: [],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
