-- Table des leads issus du formulaire de contact (app/api/contact/route.ts)
--
-- Cette table est créée automatiquement au démarrage du serveur (voir
-- instrumentation.ts + lib/db/postgres.ts) dès que DATABASE_URL est
-- configurée — aucune action manuelle n'est requise.
--
-- Ce fichier reste comme référence / filet de sécurité si tu préfères
-- l'exécuter toi-même dans l'éditeur SQL de Supabase.

CREATE TABLE IF NOT EXISTS leads (
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
);
