import { Router } from "express";

const router = Router();

router.get("/sales/:name", getSales);