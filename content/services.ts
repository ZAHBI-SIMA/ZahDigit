export type Service = {
  slug: string;
  name: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "sites-web",
    name: "Sites web",
    description:
      "Sites vitrines, corporate, landing pages et plateformes professionnelles conçus pour présenter votre activité et convertir vos visiteurs.",
    items: [
      "UX/UI",
      "Développement",
      "Responsive design",
      "SEO technique",
      "Optimisation des performances",
      "Déploiement",
    ],
  },
  {
    slug: "applications-web",
    name: "Applications web",
    description:
      "Des applications web modernes permettant de digitaliser vos processus et de créer de nouveaux services.",
    items: ["SaaS", "Dashboards", "Plateformes", "CRM", "ERP", "Outils métier"],
  },
  {
    slug: "applications-mobiles",
    name: "Applications mobiles",
    description:
      "Des applications mobiles Android et iOS conçues autour d'une expérience utilisateur simple, rapide et intuitive.",
    items: ["iOS", "Android", "Cross-platform", "UX mobile", "Publication stores"],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    description:
      "Des interfaces pensées pour être intuitives, accessibles et agréables à utiliser, du wireframe à la maquette finale.",
    items: [
      "Recherche utilisateur",
      "Wireframes",
      "Architecture de l'information",
      "Design system",
      "Maquettes UI",
      "Prototypage",
    ],
  },
  {
    slug: "solutions-sur-mesure",
    name: "Solutions sur mesure",
    description:
      "Des solutions digitales adaptées aux besoins spécifiques de votre entreprise.",
    items: [
      "Automatisation",
      "Intégrations API",
      "Plateformes métier",
      "Systèmes de gestion",
      "Outils internes",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
