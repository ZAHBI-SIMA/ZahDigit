export async function register() {
  // Uniquement en environnement Node.js (pas sur l'edge runtime).
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { getPostgresPool } = await import("@/lib/db/postgres");
    // Applique le schéma Postgres (CREATE TABLE IF NOT EXISTS) dès le
    // démarrage du serveur, pour ne pas dépendre d'une exécution
    // manuelle du script SQL dans l'éditeur SQL Supabase.
    await getPostgresPool();
  }
}
