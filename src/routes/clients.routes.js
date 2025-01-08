import { Router } from "express";
// byCript
import { getClients, createClient, checkingData } from "../controllers/clients.controllers.js";

const router = Router();

// getting all clients
router.get("/clients", getClients);

// create a new client
router.post("/clients", createClient);

// checking if the client data is correct
router.post("/clients/login", checkingData);

export default router;