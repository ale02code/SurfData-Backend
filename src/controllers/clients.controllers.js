import { pool } from "../db.js";

export const getClients = async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM login.clients');
  res.json(rows);
}