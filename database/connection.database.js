import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

export const db = new Pool({
  connectionString,
  allowExitOnIdle: true,
});

try {
  await db.query('SELECT * FROM login.clients');
  console.log("Database connected");
} catch {
  console.log('Error connecting to the database');
}
