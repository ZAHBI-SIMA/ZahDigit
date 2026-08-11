import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <Section tone="dark" className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="text-sm font-medium tracking-wide text-orange">
            Sites web · Applications web · Applications mobiles · Solutions digitales
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Nous transformons vos idées en expériences digitales performantes.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/70 sm:text-lg lg:mx-0">
            Création de sites web, applications web et applications mobiles
            conçus pour développer votre activité, améliorer votre expérience
            client et accélérer votre croissance.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Button href="/contact" size="lg">
              Démarrer mon projet →
            </Button>
            <Button
              href="/realisations"
              variant="secondary"
              size="lg"
              className="text-white"
            >
              Voir nos réalisations
            </Button>
          </div>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block" aria-hidden="true">
          <div className="absolute inset-x-6 top-6 aspect-video rounded-xl border border-white/10 bg-white/5 shadow-2xl" />
          <div className="absolute bottom-0 right-0 h-40 w-24 rounded-xl border border-white/10 bg-orange/10 shadow-2xl" />
        </div>
      </div>
    </Section>
  );
}
