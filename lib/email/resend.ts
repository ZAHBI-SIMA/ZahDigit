import { Resend } from "resend";
import type { ContactFormValues } from "@/lib/validations/contact.schema";

let cachedClient: Resend | null | undefined;

function getResendClient() {
  if (cachedClient !== undefined) return cachedClient;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[resend] RESEND_API_KEY absent — aucun email de confirmation ne sera envoyé."
    );
    cachedClient = null;
    return cachedClient;
  }

  cachedClient = new Resend(apiKey);
  return cachedClient;
}

export async function sendContactEmails(lead: ContactFormValues) {
  const resend = getResendClient();
  if (!resend) return;

  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL;

  if (!fromEmail || !notificationEmail) {
    console.warn(
      "[resend] CONTACT_FROM_EMAIL / CONTACT_NOTIFICATION_EMAIL absents — envoi d'emails ignoré."
    );
    return;
  }

  await Promise.all([
    resend.emails.send({
      from: fromEmail,
      to: lead.email,
      subject: "Nous avons bien reçu votre demande — ZahDigit",
      text: `Bonjour ${lead.fullName},\n\nNous avons bien reçu votre demande concernant votre projet (${lead.projectType}). Notre équipe reviendra vers vous rapidement.\n\nÀ bientôt,\nL'équipe ZahDigit`,
    }),
    resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      subject: `Nouveau lead : ${lead.fullName} — ${lead.projectType}`,
      text: [
        `Nom : ${lead.fullName}`,
        lead.company ? `Entreprise : ${lead.company}` : null,
        `Email : ${lead.email}`,
        lead.phone ? `Téléphone : ${lead.phone}` : null,
        `Type de projet : ${lead.projectType}`,
        `Budget : ${lead.budget}`,
        lead.timeline ? `Délai souhaité : ${lead.timeline}` : null,
        `Description : ${lead.description}`,
        lead.utmSource ? `UTM source : ${lead.utmSource}` : null,
        lead.utmCampaign ? `UTM campaign : ${lead.utmCampaign}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  ]);
}
