import { Section } from "@/components/layout/Section";

export function LegalArticle({
  updatedAt,
  children,
}: {
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <Section tone="light">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-gray">Dernière mise à jour : {updatedAt}</p>
        <div className="prose-legal mt-8 space-y-8">{children}</div>
      </div>
    </Section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-navy">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray">{children}</div>
    </section>
  );
}
