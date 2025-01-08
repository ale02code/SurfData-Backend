import { Router } from "express";

const router = Router();

// getting all products
router.get("/sales/:name", getSales);

// getting filter product
router.get("/sales/:name/",)

// add sale
router.post("/sales/:name/",);

// edit sale
router.put("/sales/:name/",);

//* factura

// router.get("/clients/:id", async (req, res) => {
//   const { id } = req.params;
//   const { rows } = await pool.query('SELECT * FROM login.clients WHERE id = $1', [id]);

// If the client does not exist
//   if (rows.length === 0) {
//     return res.status(404).json({ message: "Client not found" });
//   }
//   res.json(rows[0]);
// });

// router.delete("/clients/:id", async (req, res) => {
//   const { id } = req.params;
//   const { rowCount } = await pool.query(
//     'DELETE FROM login.clients WHERE id = $1',
//     [id]);

//   if (rowCount === 0) {
//     return res.status(404).json({ message: "Client not found" });
//   }

//   res.sendStatus(204);
// });

// router.put("/clients/:id", async (req, res) => {
//   const { id } = req.params;
//   const body = req.body;

//   const { rows } = await pool.query(
//     'UPDATE login.clients SET name = $1, password = $2 WHERE id = $3 RETURNING *',
//     [body.name, body.password, id]);

//   if (rows.length === 0) {
//     return res.status(404).json({ message: "Client not found" });
//   }

//   res.json(rows[0]);
// });