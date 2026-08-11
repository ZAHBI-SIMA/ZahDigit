import { Section } from "@/components/layout/Section";

const pillars = [
  { title: "Stratégie", description: "Comprendre avant de développer." },
  { title: "Design", description: "Créer des expériences intuitives." },
  { title: "Technologie", description: "Construire des solutions fiables et évolutives." },
];

export function DifferentiationSection() {
  return (
    <Section tone="dark">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Votre projet mérite mieux qu&apos;un simple site web.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
          Nous concevons des produits digitaux qui combinent stratégie, design
          et technologie pour transformer vos idées en véritables outils de
          croissance.
        </p>
      </div>
      <div className="mt-14 grid gap-8 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="text-center">
            <h3 className="text-lg font-semibold text-orange">{pillar.title}</h3>
            <p className="mt-2 text-sm text-white/70">{pillar.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
