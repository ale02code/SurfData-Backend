import { pool } from "../db.js";

export const getSales = async (req, res) => {

  try {
    const nameClient = req.name;

    const nameTable = nameClient.replace(" ", "").toLowerCase();

    const { rows } = await pool.query(`SELECT * FROM sales.${nameTable}`);

    if (rows.length === 0) {
      return res.status(204).json({ message: "No sales data available" });
    }

    res.status(200).json(rows);
  } catch (error) {
    res.status(400).json({ message: "Error getting sales" })
  }
}

export const createSale = async (req, res) => {
  const { producto, precio, cantidad } = req.body

  try {
    const nameClient = req.name;

    const nameTable = nameClient.replace(" ", "").toLowerCase();

    if (!nameClient || !producto || !precio || !cantidad) {
      return res.status(500).json({ message: "Datos incompletos" });
    }

    const { rows } = await pool.query(`INSERT INTO sales.${nameTable} (producto, precio, cantidad) VALUES ($1, $2, $3) RETURNING *`, [producto, precio, cantidad])

    res.status(200).json(rows);
  } catch {
    res.status(500).json({ message: "Error with create sale" });
  }
}