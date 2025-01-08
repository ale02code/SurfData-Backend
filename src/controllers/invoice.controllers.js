import { pool } from "../db";

export const getSaleData = async (req, res) => {
  const { id, name } = req.params;

  const avalidTableName = /^[a-zA-Z0-9_]+$/

  if (!avalidTableName.test(name)) {
    return res.status(400).json({
      message: "Invalid table name"
    });
  };

  const { rows } = await pool.query(`SELECT * FROM sales.${tableName} WHERE id = $1`
    , [id]);

  res.json(rows[0]);
}