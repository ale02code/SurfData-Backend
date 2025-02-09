import { Router } from "express";
import { getClients, createClient, checkingData } from "../controllers/authentication.controllers.js";
import { verifyToken } from "../middlewares/jwt.middlewares.js";

const router = Router();

// create a new client
router.post("/register", createClient);

// checking if the client data is correct
router.post("/login", checkingData);

export default router;