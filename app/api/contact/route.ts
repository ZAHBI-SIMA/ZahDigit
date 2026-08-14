import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact.schema";
import { isRateLimited } from "@/lib/rate-limit";
import { getMysqlPool } from "@/lib/db/mysql";
import { sendContactEmails } from "@/lib/email/resend";

const MIN_SUBMIT_DELAY_MS = 3000;

function getClientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Trop de tentatives. Merci de réessayer plus tard." },
      { status: 429 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Formulaire invalide.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const lead = parsed.data;

  // Honeypot rempli ou soumission trop rapide : signaux forts de robot.
  // On répond succès pour ne pas donner d'indice au bot, sans rien traiter.
  const submittedTooFast =
    typeof lead.formRenderedAt === "number" &&
    Date.now() - lead.formRenderedAt < MIN_SUBMIT_DELAY_MS;

  if (lead.company_website || submittedTooFast) {
    return NextResponse.json({ success: true });
  }

  const pool = await getMysqlPool();
  if (pool) {
    try {
      await pool.execute(
        `INSERT INTO leads
          (full_name, company, email, phone, project_type, budget_range, timeline, description, consent_rgpd, utm_source, utm_medium, utm_campaign, utm_content, utm_term)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
    } catch (error) {
      console.error("[contact] Échec de l'enregistrement du lead en base :", error);
    }
  }

  try {
    await sendContactEmails(lead);
  } catch (error) {
    console.error("[contact] Échec de l'envoi des emails :", error);
  }

  return NextResponse.json({ success: true });
}
