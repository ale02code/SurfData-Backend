import { pool } from "../db.js";

export const getSales = async (req, res) => {
  const { name } = req.params;
  const { rows } = await pool.query('SELECT * FROM sales.')

  if (rows.length === 0) {
    return res.status(404).json({ message: "Sale not found" });
  }

  res.json(rows);
}