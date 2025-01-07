import { pool } from "../db.js";

export const getSales = async (req, res) => {
  const { name } = req.params;

  // Regular expression to validate the table name
  const avalidTableName = /^[a-zA-Z0-9_]+$/

  if (!avalidTableName.test(name)) {
    return res.status(400).json({
      message: "Invalid table name"
    })
  }

  try {
    const { rows } = await pool.query(`SELECT * FROM sales.${name}`);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Sale not found" });
    }

    res.json(rows);
  } catch (error) {
    console.error("Error getting sales", error);
    res.status(500).json({
      message: "Error getting sales"
    });
  }
}