import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";

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
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-orange/50 hover:bg-white/10"
          >
            <MailIcon className="h-5 w-5 shrink-0 text-orange" />
            <span className="text-sm font-medium text-white">{siteConfig.email}</span>
          </a>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-orange/50 hover:bg-white/10"
          >
            <PhoneIcon className="h-5 w-5 shrink-0 text-orange" />
            <span className="text-sm font-medium text-white">{siteConfig.phone}</span>
          </a>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <MapPinIcon className="h-5 w-5 shrink-0 text-orange" />
            <span className="text-sm font-medium text-white">
              Abidjan, Côte d&apos;Ivoire
            </span>
          </div>
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
