import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/types";

let cachedClient: ReturnType<typeof createClient<Database>> | null | undefined;

/**
 * Retourne un client Supabase server-side (via l'API REST), ou `null`
 * si les variables d'environnement ne sont pas configurées (le lead
 * n'est alors pas persisté, mais le formulaire continue de
 * fonctionner). Clé service_role : jamais exposée côté client, utilisée
 * uniquement dans les route handlers.
 */
export function getSupabaseServerClient() {
  if (cachedClient !== undefined) return cachedClient;

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    console.warn(
      "[supabase] SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY absents — les leads ne seront pas enregistrés en base."
    );
    cachedClient = null;
    return cachedClient;
  }

  cachedClient = createClient<Database>(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
  return cachedClient;
}
