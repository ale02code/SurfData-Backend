import { pool } from "../db.js";
import bcryptjs from 'bcryptjs';

export const getClients = async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM login.clients');
  res.json(rows);
}

export const createClient = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ message: "Name and password are required" });
  }

  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);

  const { rows } = await pool.query(
    'INSERT INTO login.clients (name, password) VALUES ($1, $2) RETURNING *',
    [name, hashedPassword]);

  res.json(rows[0]);
}

export const checkingData = async (req, res) => {
  const data = req.body;

}