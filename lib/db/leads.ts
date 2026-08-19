import { getPostgresPool } from "@/lib/db/postgres";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { ContactFormValues } from "@/lib/validations/contact.schema";

/**
 * Enregistre un lead en base.
 *
 * Deux chemins possibles, dans cet ordre :
 * 1. Connexion Postgres directe (`DATABASE_URL`) — chemin principal, car
 *    c'est la seule variable requise et celle qui sert déjà à créer la
 *    table au démarrage.
 * 2. Client Supabase REST (`SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`)
 *    — utilisé en repli si `DATABASE_URL` n'est pas configurée.
 *
 * Retourne `true` si le lead a bien été persisté.
 */
export async function saveLead(lead: ContactFormValues): Promise<boolean> {
  const pool = await getPostgresPool();

  if (pool) {
    try {
      await pool.query(
        `INSERT INTO leads
          (full_name, company, email, phone, project_type, budget_range, timeline, description, consent_rgpd, utm_source, utm_medium, utm_campaign, utm_content, utm_term)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
        [
          lead.fullName,
          lead.company || null,
          lead.email,
          lead.phone || null,
          lead.projectType,
          lead.budget,
          lead.timeline || null,
          lead.description,
          lead.consent,
          lead.utmSource || null,
          lead.utmMedium || null,
          lead.utmCampaign || null,
          lead.utmContent || null,
          lead.utmTerm || null,
        ]
      );
      console.info("[contact] Lead enregistré en base (postgres).");
      return true;
    } catch (error) {
      console.error("[contact] Échec de l'enregistrement via postgres :", error);
    }
  }

  const supabase = getSupabaseServerClient();
  if (supabase) {
    const { error } = await supabase.from("leads").insert({
      full_name: lead.fullName,
      company: lead.company || null,
      email: lead.email,
      phone: lead.phone || null,
      project_type: lead.projectType,
      budget_range: lead.budget,
      timeline: lead.timeline || null,
      description: lead.description,
      consent_rgpd: lead.consent,
      utm_source: lead.utmSource || null,
      utm_medium: lead.utmMedium || null,
      utm_campaign: lead.utmCampaign || null,
      utm_content: lead.utmContent || null,
      utm_term: lead.utmTerm || null,
    });

    if (error) {
      console.error("[contact] Échec de l'enregistrement via supabase-js :", error.message);
      return false;
    }

    console.info("[contact] Lead enregistré en base (supabase-js).");
    return true;
  }

  console.error(
    "[contact] Aucune base configurée (DATABASE_URL ou SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY) — le lead n'a PAS été enregistré."
  );
  return false;
}
