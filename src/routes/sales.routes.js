import { Router } from "express";
import { getSales } from "../controllers/sales.controllers.js"
import { verifyToken } from "../middlewares/jwt.middlewares.js";

const router = Router();

// getting all products
router.get("/sales", verifyToken, getSales);

export default router;