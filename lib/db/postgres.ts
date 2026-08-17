import { Pool } from "pg";
import { MIGRATIONS } from "@/lib/db/schema";

let cachedPool: Pool | null | undefined;
let migrationPromise: Promise<void> | undefined;

function createPoolFromEnv() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    console.warn(
      "[postgres] DATABASE_URL absent — les leads ne seront pas enregistrés en base."
    );
    return null;
  }

  return new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
}

async function runMigrations(pool: Pool) {
  for (const statement of MIGRATIONS) {
    await pool.query(statement);
  }
  console.info("[postgres] Schéma vérifié / appliqué avec succès.");
}

/**
 * Retourne un pool de connexions Postgres (Supabase) prêt à l'emploi
 * (schéma appliqué), ou `null` si `DATABASE_URL` n'est pas configurée
 * (le lead n'est alors pas persisté, mais le formulaire continue de
 * fonctionner). Le pool et la migration ne sont créés/exécutés qu'une
 * seule fois par processus serveur.
 */
export async function getPostgresPool(): Promise<Pool | null> {
  if (cachedPool === undefined) {
    cachedPool = createPoolFromEnv();
    if (cachedPool) {
      migrationPromise = runMigrations(cachedPool).catch((error) => {
        console.error("[postgres] Échec de l'application automatique du schéma :", error);
      });
    }
  }

  if (migrationPromise) {
    await migrationPromise;
  }

  return cachedPool;
}
