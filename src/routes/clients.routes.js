import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/clients", (req, res) => {
  res.send("Clients List");
});

router.get("/clients/:id", (req, res) => {
  const { id } = req.params;
  res.send("Clients List " + id);
});

router.post("/clients", (req, res) => {
  res.send("Create Client");
});

router.delete("/clients/:id", (req, res) => {
  res.send("delete Client");
});

router.put("/clients/:id", (req, res) => {
  res.send("update Client");
});

export default router;