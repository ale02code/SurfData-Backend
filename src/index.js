import express from 'express';
import cors from 'cors';
import { PORT, ALLOWED_ORIGINS } from './config.js';
import userRoutes from "./routes/clients.routes.js";

const app = express();

// Configuration for CORS
// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || ALLOWED_ORIGINS.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }));

app.use(express.json());
app.use(userRoutes);

app.listen(PORT);
console.log('Server on port', PORT);