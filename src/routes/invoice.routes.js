import { Router } from "express";
import { getSaleData } from "../controllers/invoice.controllers.js";

const router = Router();

router.get("/sale/data/:id", getSaleData);