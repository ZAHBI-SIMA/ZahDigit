import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LegalArticle, LegalSection } from "@/components/layout/LegalArticle";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site ZahDigit.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        title="Mentions légales"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]}
      />

      <LegalArticle updatedAt="[à compléter]">
        <LegalSection title="1. Éditeur du site">
          <p>
            Le présent site est édité par <strong>[Raison sociale de l&apos;agence]</strong>,
            [forme juridique], dont le siège social est situé [adresse complète].
          </p>
          <p>
            Numéro d&apos;identification (RCCM / IFU) : [à compléter].
            <br />
            Directeur de la publication : [nom et fonction].
            <br />
            Contact : {siteConfig.email} — {siteConfig.phone}.
          </p>
        </LegalSection>

        <LegalSection title="2. Hébergement">
          <p>
            Le site est hébergé par Hostinger, [adresse légale de
            l&apos;hébergeur à compléter].
          </p>
        </LegalSection>

        <LegalSection title="3. Propriété intellectuelle">
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images,
            graphismes, logo, icônes, structure) est la propriété exclusive de
            [Raison sociale de l&apos;agence], sauf mention contraire. Toute
            reproduction, représentation, modification ou exploitation, totale
            ou partielle, sans autorisation préalable écrite, est interdite.
          </p>
        </LegalSection>

        <LegalSection title="4. Liens hypertextes">
          <p>
            Le site peut contenir des liens vers des sites tiers. [Raison
            sociale de l&apos;agence] n&apos;exerce aucun contrôle sur ces sites et
            décline toute responsabilité quant à leur contenu.
          </p>
        </LegalSection>

        <LegalSection title="5. Limitation de responsabilité">
          <p>
            [Raison sociale de l&apos;agence] s&apos;efforce d&apos;assurer l&apos;exactitude et la
            mise à jour des informations diffusées sur ce site, sans pouvoir
            garantir l&apos;exhaustivité ou l&apos;absence d&apos;erreurs. L&apos;utilisateur est
            seul responsable de l&apos;usage qu&apos;il fait des informations fournies.
          </p>
        </LegalSection>

        <LegalSection title="6. Droit applicable">
          <p>
            Les présentes mentions légales sont soumises au droit ivoirien.
            Tout litige relatif à l&apos;utilisation du site relève de la
            compétence des tribunaux compétents [à préciser : ville/juridiction].
          </p>
        </LegalSection>
      </LegalArticle>
    </>
  );
}
