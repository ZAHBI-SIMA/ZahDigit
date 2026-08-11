import { Section } from "@/components/layout/Section";
import { techStack } from "@/content/tech-stack";

export function TechStackSection() {
  return (
    <Section tone="neutral">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
          Une stack technique moderne et fiable.
        </h2>
      </div>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {techStack.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-orange">
              {group.label}
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-gray">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
