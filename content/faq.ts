export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Combien coûte la création d'un site web ?",
    answer:
      "Le tarif dépend du niveau de personnalisation, des fonctionnalités et des besoins techniques.",
  },
  {
    question: "Combien de temps faut-il pour développer une application ?",
    answer:
      "La durée dépend de la complexité du projet et du périmètre fonctionnel.",
  },
  {
    question: "Travaillez-vous avec des entreprises en dehors de la Côte d'Ivoire ?",
    answer:
      "Oui, si l'agence propose effectivement des prestations à distance.",
  },
  {
    question: "Assurez-vous la maintenance ?",
    answer:
      "Oui, avec une offre de maintenance adaptée aux besoins du projet.",
  },
];
