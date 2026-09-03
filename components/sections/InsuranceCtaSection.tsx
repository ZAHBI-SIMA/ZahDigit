import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function InsuranceCtaSection() {
  return (
    <Section tone="light" className="py-12 sm:py-16">
      <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:gap-10 lg:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-orange">
            Notre partenaire assurance
          </p>
          <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
            Protégez votre activité avec SIM Assurances.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray">
            Souscrivez en ligne à une solution d&apos;assurance adaptée à votre
            situation, en quelques étapes.
          </p>
        </div>

        <Button
          href={siteConfig.simAssurancesUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className="shrink-0"
        >
          Souscrire une assurance ↗
        </Button>
      </div>
    </Section>
  );
}
