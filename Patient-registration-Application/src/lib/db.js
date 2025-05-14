import { PGlite } from '@electric-sql/pglite';

let db;

export const getDB = async () => {
  if (!db) {
    db = new PGlite('idb://patient-db');
    await db.exec(`
      CREATE TABLE IF NOT EXISTS patients (
        id INTEGER PRIMARY KEY ,
        name TEXT NOT NULL,
        dob TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL
      );
    `);
  }
  
  // Check if the 'patients' table exists {Debugging}
  try {
    const result = await db.query('SELECT * FROM patients LIMIT 1');
    console.log('Patients table has data:', result.rows.length > 0); // Should return true if data exists
  } catch (error) {
    console.log('Error querying patients table:', error);
  } // Should be true  {Debugging}
  
  return db;
};
