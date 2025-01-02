import 'dotenv/config';
import pg from 'pg';

const connectionString = process.env.DATABASE_URL;

export const pool = new pg.Pool({
  connectionString,
});

pool.query('SELECT NOW()').then(result => {
  console.log(result.rows[0]);
})