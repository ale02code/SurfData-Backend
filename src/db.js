import 'dotenv/config';
import pg from 'pg';

const connectionString = process.env.DATABASE_URL;

export const pool = new pg.Pool({
  connectionString,
});