import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function FinalCtaSection() {
  return (
    <Section tone="accent">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Vous avez une idée ? Construisons-la ensemble.
        </h2>
        <p className="mt-6 text-base text-white/90 sm:text-lg">
          Parlez-nous de votre projet et obtenez une première estimation de
          votre solution digitale.
        </p>
        <div className="mt-10">
          <Button href="/contact" size="lg" className="bg-white text-orange hover:bg-white/90">
            Démarrer un projet →
          </Button>
        </div>
      </div>
    </Section>
  );
}
