-- Table des leads issus du formulaire de contact (app/api/contact/route.ts)
-- À exécuter dans le SQL editor du projet Supabase avant de configurer
-- SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY en production.

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  full_name text not null,
  company text,
  email text not null,
  phone text,
  project_type text not null,
  budget_range text not null,
  timeline text,
  description text not null,
  consent_rgpd boolean not null,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  status text default 'new'
);
