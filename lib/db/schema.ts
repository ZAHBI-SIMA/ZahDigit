/**
 * Schéma de base MySQL, appliqué automatiquement au démarrage du serveur
 * (voir instrumentation.ts) et lors du premier accès à la base si le
 * serveur n'a pas eu l'occasion de le faire. `CREATE TABLE IF NOT EXISTS`
 * est idempotent : sans effet si la table existe déjà.
 */
export const MIGRATIONS: string[] = [
  `CREATE TABLE IF NOT EXISTS leads (
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
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
];
