import { z } from "zod";
import { projectTypes, budgetRanges } from "@/content/contact-options";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Indiquez votre nom complet."),
  company: z.string().trim().optional(),
  email: z.string().trim().email("Adresse email invalide."),
  phone: z.string().trim().optional(),
  projectType: z.enum(projectTypes, {
    message: "Sélectionnez un type de projet.",
  }),
  budget: z.enum(budgetRanges, {
    message: "Sélectionnez une fourchette de budget.",
  }),
  timeline: z.string().trim().optional(),
  description: z
    .string()
    .trim()
    .min(20, "Décrivez votre projet en quelques phrases (20 caractères minimum)."),
  consent: z.literal(true, {
    message: "Le consentement RGPD est requis pour envoyer votre demande.",
  }),
  // Honeypot — doit rester vide pour un humain. Rempli, il signale un robot ;
  // vérifié après la validation (pas de contrainte ici pour ne pas bloquer
  // le parsing et révéler le piège via un message d'erreur).
  company_website: z.string().optional(),
  // Horodatage d'affichage du formulaire, utilisé côté serveur pour détecter une soumission trop rapide.
  formRenderedAt: z.number().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmContent: z.string().optional(),
  utmTerm: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
