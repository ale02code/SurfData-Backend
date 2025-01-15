import { pool } from "../db.js";

export const getSales = async (req, res) => {

  try {
    const nameClient = req.name;

    const nameTable = nameClient.replace(" ", "").toLowerCase();
    console.log(nameTable);

    const { rows } = await pool.query(`SELECT * FROM sales.${nameTable}`);

    if (rows.length === 0) {
      return res.status(204).json({ message: "No sales data available" });
    }

    res.status(200).json(rows);
  } catch (error) {
    res.status(400).json({ message: "Error getting sales" })
  }
}