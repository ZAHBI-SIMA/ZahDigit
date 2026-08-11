export type MethodStep = {
  number: string;
  title: string;
  items: string[];
  deliverable: string;
};

export const methodSteps: MethodStep[] = [
  {
    number: "01",
    title: "Discovery",
    items: ["Objectifs business", "Utilisateurs", "Besoins", "Contraintes", "Fonctionnalités"],
    deliverable: "Cadrage fonctionnel",
  },
  {
    number: "02",
    title: "UX/UI Design",
    items: ["Wireframes", "Parcours utilisateurs", "Architecture", "Design system", "Maquettes"],
    deliverable: "Prototype UI/UX",
  },
  {
    number: "03",
    title: "Développement",
    items: ["Frontend", "Backend", "API", "Base de données", "Authentification", "Intégrations"],
    deliverable: "Produit fonctionnel",
  },
  {
    number: "04",
    title: "Tests",
    items: ["Fonctionnels", "Responsive", "Performance", "Sécurité", "Compatibilité"],
    deliverable: "Version validée",
  },
  {
    number: "05",
    title: "Déploiement",
    items: ["Hébergement", "Domaine", "SSL", "Configuration", "Monitoring"],
    deliverable: "Solution en production",
  },
  {
    number: "06",
    title: "Évolution",
    items: ["Maintenance", "Corrections", "Optimisation", "Nouvelles fonctionnalités", "Support technique"],
    deliverable: "Accompagnement continu",
  },
];
