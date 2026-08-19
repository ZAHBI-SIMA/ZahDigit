import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlez-nous de votre projet digital et obtenez une première estimation. Sites web, applications web et mobiles, solutions sur mesure.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet."
        description="Décrivez-nous votre besoin : nous revenons vers vous rapidement avec une première lecture de votre projet."
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      >
        <div className="mt-6 flex flex-col gap-2 text-sm font-medium text-white sm:flex-row sm:gap-6">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-orange">
            {siteConfig.email}
          </a>
          <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-orange">
            {siteConfig.phone}
          </a>
        </div>
      </PageHero>

      <Section tone="light">
        <div className="mx-auto max-w-3xl">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
