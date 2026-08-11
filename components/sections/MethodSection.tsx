import { Section } from "@/components/layout/Section";
import { methodSteps } from "@/content/methode";

export function MethodSection({
  title = "Une méthode claire. Un projet maîtrisé.",
}: {
  title?: string;
}) {
  return (
    <Section tone="neutral">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {methodSteps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-light-gray bg-white p-6"
          >
            <span className="text-sm font-semibold text-orange">{step.number}</span>
            <h3 className="mt-2 text-lg font-semibold text-navy">{step.title}</h3>
            <ul className="mt-4 space-y-1.5 text-sm text-gray">
              {step.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy">
              Livrable : {step.deliverable}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
