// db.js
import { PGliteWorker } from '@electric-sql/pglite/worker';

let db = null;

export async function initDB() {
  if (!db) {
    db = await PGliteWorker.create(
      new Worker(new URL('./pglite-worker.js', import.meta.url), {
        type: 'module',
      }),
      {
        dataDir: 'idb://patient-db',
      }
    );
  }
  return db;
}
