import { PGlite } from '@electric-sql/pglite';

let db = null;
export async function initDB() {
  if (!db) {
    db = await PGlite.create({ dataDir: 'idb://patient-db' });
    await db.exec(`
      CREATE TABLE IF NOT EXISTS patient (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        dob TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL
      );
    `);
  }
  return db;
}
