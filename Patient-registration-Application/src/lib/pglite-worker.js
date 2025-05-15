// pglite-worker.js
import { PGlite } from '@electric-sql/pglite';
import { worker } from '@electric-sql/pglite/worker';

worker({
  async init() {
    const db = new PGlite({ dataDir: 'idb://patient-db' });

    await db.exec(`
      CREATE TABLE IF NOT EXISTS patient (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        dob TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL
      );
    `);

    return db;
  },
});
