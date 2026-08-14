import mysql from "mysql2/promise";
import { MIGRATIONS } from "@/lib/db/schema";

let cachedPool: mysql.Pool | null | undefined;
let migrationPromise: Promise<void> | undefined;

function createPoolFromEnv() {
  const host = process.env.DB_HOST;
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const database = process.env.DB_NAME;

  if (!host || !user || !password || !database) {
    console.warn(
      "[mysql] DB_HOST / DB_USER / DB_PASSWORD / DB_NAME absents — les leads ne seront pas enregistrés en base."
    );
    return null;
  }

  return mysql.createPool({
    host,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    user,
    password,
    database,
    waitForConnections: true,
    connectionLimit: 5,
  });
}

async function runMigrations(pool: mysql.Pool) {
  for (const statement of MIGRATIONS) {
    await pool.query(statement);
  }
  console.info("[mysql] Schéma vérifié / appliqué avec succès.");
}

/**
 * Retourne un pool de connexions MySQL prêt à l'emploi (schéma appliqué),
 * ou `null` si les variables d'environnement ne sont pas configurées (le
 * lead n'est alors pas persisté, mais le formulaire continue de
 * fonctionner). Le pool et la migration ne sont créés/exécutés qu'une
 * seule fois par processus serveur.
 */
export async function getMysqlPool(): Promise<mysql.Pool | null> {
  if (cachedPool === undefined) {
    cachedPool = createPoolFromEnv();
    if (cachedPool) {
      migrationPromise = runMigrations(cachedPool).catch((error) => {
        console.error("[mysql] Échec de l'application automatique du schéma :", error);
      });
    }
  }

  if (migrationPromise) {
    await migrationPromise;
  }

  return cachedPool;
}
