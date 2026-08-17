/**
 * Schéma de base Postgres (Supabase), appliqué automatiquement au
 * démarrage du serveur (voir instrumentation.ts) et lors du premier
 * accès à la base si le serveur n'a pas eu l'occasion de le faire.
 * `CREATE TABLE IF NOT EXISTS` est idempotent : sans effet si la table
 * existe déjà.
 */
export const MIGRATIONS: string[] = [
  `CREATE TABLE IF NOT EXISTS leads (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    full_name TEXT NOT NULL,
    company TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    project_type TEXT NOT NULL,
    budget_range TEXT NOT NULL,
    timeline TEXT,
    description TEXT NOT NULL,
    consent_rgpd BOOLEAN NOT NULL,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_content TEXT,
    utm_term TEXT,
    status TEXT NOT NULL DEFAULT 'new'
  )`,
];
