import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <Image
        src="/image_heros_zahdigit.jpg"
        alt="L'équipe ZahDigit au travail sur un projet digital"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-navy/70" />

      <Container className="relative text-center">
        <p className="text-sm font-medium tracking-wide text-orange">
          Sites web · Applications web · Applications mobiles · Solutions digitales
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Nous transformons vos idées en expériences digitales performantes.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/70 sm:text-lg">
          Création de sites web, applications web et applications mobiles
          conçus pour développer votre activité, améliorer votre expérience
          client et accélérer votre croissance.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" size="lg">
            Démarrer mon projet →
          </Button>
          <Button href="/realisations" variant="secondary" size="lg" className="text-white">
            Voir nos réalisations
          </Button>
        </div>
      </Container>
    </section>
  );
}
