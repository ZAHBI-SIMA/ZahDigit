export async function register() {
  // Uniquement en environnement Node.js (pas sur l'edge runtime).
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { getMysqlPool } = await import("@/lib/db/mysql");
    // Applique le schéma MySQL (CREATE TABLE IF NOT EXISTS) dès le
    // démarrage du serveur, pour ne pas dépendre d'une exécution
    // manuelle du script SQL sur l'hébergeur.
    await getMysqlPool();
  }
}
