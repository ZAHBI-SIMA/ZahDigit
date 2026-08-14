-- Table des leads issus du formulaire de contact (app/api/contact/route.ts)
--
-- Cette table est désormais créée automatiquement au démarrage du
-- serveur (voir instrumentation.ts + lib/db/mysql.ts) dès que les
-- variables DB_HOST / DB_PORT / DB_NAME / DB_USER / DB_PASSWORD sont
-- configurées — aucune action manuelle n'est requise.
--
-- Ce fichier reste comme référence / filet de sécurité si tu préfères
-- l'exécuter toi-même dans phpMyAdmin / l'éditeur SQL Hostinger sur la
-- base u523667971_zahdigit_db.

CREATE TABLE IF NOT EXISTS leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  full_name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  project_type VARCHAR(100) NOT NULL,
  budget_range VARCHAR(100) NOT NULL,
  timeline VARCHAR(100),
  description TEXT NOT NULL,
  consent_rgpd BOOLEAN NOT NULL,
  utm_source VARCHAR(255),
  utm_medium VARCHAR(255),
  utm_campaign VARCHAR(255),
  utm_content VARCHAR(255),
  utm_term VARCHAR(255),
  status VARCHAR(50) NOT NULL DEFAULT 'new'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
