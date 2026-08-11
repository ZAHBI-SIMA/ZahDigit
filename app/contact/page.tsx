import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlez-nous de votre projet digital et obtenez une première estimation. Sites web, applications web et mobiles, solutions sur mesure.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet."
        description="Décrivez-nous votre besoin : nous revenons vers vous rapidement avec une première lecture de votre projet."
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      />

      <Section tone="light">
        <div className="mx-auto max-w-3xl">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
