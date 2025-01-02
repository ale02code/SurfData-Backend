import express from 'express';
import { PORT } from './config.js';
import userRoutes from "./routes/clients.routes.js";

const app = express();

app.use(userRoutes);

app.listen(PORT);
console.log('Server on port', PORT);