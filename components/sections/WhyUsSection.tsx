import { Section } from "@/components/layout/Section";

const advantages = [
  {
    number: "01",
    title: "UX/UI",
    description:
      "Des interfaces pensées pour être intuitives, accessibles et agréables à utiliser.",
  },
  {
    number: "02",
    title: "Technologie",
    description: "Des architectures modernes, sécurisées et évolutives.",
  },
  {
    number: "03",
    title: "Performance",
    description:
      "Optimisation du temps de chargement, SEO technique et Core Web Vitals.",
  },
  {
    number: "04",
    title: "Accompagnement",
    description:
      "Accompagnement du cadrage jusqu'au déploiement et à l'évolution du produit.",
  },
];

export function WhyUsSection() {
  return (
    <Section tone="neutral">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
          Pas seulement du code. De la stratégie, du design et de la performance.
        </h2>
      </div>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {advantages.map((advantage) => (
          <div key={advantage.number}>
            <span className="text-sm font-semibold text-orange">{advantage.number}</span>
            <h3 className="mt-2 text-lg font-semibold text-navy">{advantage.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
