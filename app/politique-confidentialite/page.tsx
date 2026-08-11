import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LegalArticle, LegalSection } from "@/components/layout/LegalArticle";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et de protection des données du site ZahDigit.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHero
        title="Politique de confidentialité"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Politique de confidentialité" },
        ]}
      />

      <LegalArticle updatedAt="[à compléter]">
        <LegalSection title="1. Introduction">
          <p>
            [Raison sociale de l&apos;agence] attache une importance particulière à
            la protection des données personnelles de ses visiteurs et
            prospects. Cette politique explique quelles données sont
            collectées via ce site, pourquoi, et quels sont vos droits.
          </p>
        </LegalSection>

        <LegalSection title="2. Données collectées">
          <p>
            Lorsque vous soumettez le formulaire de contact, nous collectons :
            nom et prénom, entreprise, email professionnel, téléphone, type de
            projet, budget estimatif, délai souhaité, description du projet, et
            votre consentement explicite au traitement de ces données.
          </p>
          <p>
            Des données de navigation (pages visitées, source de trafic,
            paramètres UTM) peuvent également être collectées via nos outils
            d&apos;analyse (Google Analytics 4).
          </p>
        </LegalSection>

        <LegalSection title="3. Finalités du traitement">
          <p>
            Ces données sont utilisées pour : répondre à votre demande de
            projet, qualifier votre besoin, vous recontacter, établir un
            devis, et améliorer la pertinence de notre site et de nos offres.
          </p>
        </LegalSection>

        <LegalSection title="4. Base légale">
          <p>
            Le traitement repose sur votre consentement explicite, recueilli
            lors de la soumission du formulaire de contact, ainsi que sur
            l&apos;intérêt légitime de l&apos;agence à répondre aux demandes commerciales
            qui lui sont adressées.
          </p>
        </LegalSection>

        <LegalSection title="5. Destinataires des données">
          <p>
            Vos données sont destinées exclusivement aux équipes internes de
            [Raison sociale de l&apos;agence] en charge du traitement commercial des
            demandes, ainsi qu&apos;à nos prestataires techniques (hébergement,
            envoi d&apos;emails transactionnels) dans la stricte mesure nécessaire
            au fonctionnement du site.
          </p>
        </LegalSection>

        <LegalSection title="6. Durée de conservation">
          <p>
            Les données issues du formulaire de contact sont conservées
            pendant [durée à définir, ex. 3 ans à compter du dernier contact],
            sauf obligation légale de conservation plus longue.
          </p>
        </LegalSection>

        <LegalSection title="7. Vos droits">
          <p>
            Conformément à la réglementation applicable en matière de
            protection des données personnelles, vous disposez d&apos;un droit
            d&apos;accès, de rectification, d&apos;effacement et d&apos;opposition concernant
            vos données. Pour exercer ces droits, contactez-nous à l&apos;adresse :
            [email de contact dédié à la protection des données].
          </p>
        </LegalSection>

        <LegalSection title="8. Cookies et traceurs">
          <p>
            Ce site utilise des cookies de mesure d&apos;audience (Google Analytics
            4) permettant de comprendre l&apos;usage du site. Vous pouvez à tout
            moment configurer votre navigateur pour refuser les cookies non
            essentiels.
          </p>
        </LegalSection>

        <LegalSection title="9. Sécurité des données">
          <p>
            Le site met en œuvre des mesures techniques et organisationnelles
            (connexion HTTPS, validation des formulaires, protection contre les
            soumissions automatisées) pour assurer la sécurité et la
            confidentialité de vos données.
          </p>
        </LegalSection>

        <LegalSection title="10. Contact">
          <p>
            Pour toute question relative à cette politique de confidentialité,
            contactez-nous à : [email de contact dédié à la protection des
            données].
          </p>
        </LegalSection>
      </LegalArticle>
    </>
  );
}
