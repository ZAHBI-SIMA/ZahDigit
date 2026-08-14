import mysql from "mysql2/promise";

let cachedPool: mysql.Pool | null | undefined;

/**
 * Retourne un pool de connexions MySQL, ou `null` si les variables
 * d'environnement ne sont pas configurées (le lead n'est alors pas
 * persisté, mais le formulaire continue de fonctionner).
 */
export function getMysqlPool() {
  if (cachedPool !== undefined) return cachedPool;

  const host = process.env.DB_HOST;
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const database = process.env.DB_NAME;

  if (!host || !user || !password || !database) {
    console.warn(
      "[mysql] DB_HOST / DB_USER / DB_PASSWORD / DB_NAME absents — les leads ne seront pas enregistrés en base."
    );
    cachedPool = null;
    return cachedPool;
  }

  cachedPool = mysql.createPool({
    host,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    user,
    password,
    database,
    waitForConnections: true,
    connectionLimit: 5,
  });

  return cachedPool;
}
