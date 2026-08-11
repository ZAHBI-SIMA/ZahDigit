import { Section } from "@/components/layout/Section";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/content/faq";

export function FaqSection() {
  return (
    <Section tone="light">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
          Questions fréquentes
        </h2>
      </div>
      <div className="mx-auto mt-12 max-w-2xl">
        <Accordion items={faqItems} />
      </div>
    </Section>
  );
}
