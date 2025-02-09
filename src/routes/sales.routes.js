import { Router } from "express";
import { getSales, createSale } from "../controllers/sales.controllers.js"
import { verifyToken } from "../middlewares/jwt.middlewares.js";

const router = Router();

// getting all products
router.get("/sales", verifyToken, getSales);

// add new sale
router.post("/newSale", createSale);

export default router;