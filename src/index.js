import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PORT } from './config.js';
import authenticationRoutes from "./routes/authentication.routes.js";
import salesRoutes from "./routes/sales.routes.js";

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authenticationRoutes);
app.use(salesRoutes);

app.listen(PORT);
console.log('Server on port', PORT);


//? IMPORT ALLOWED_ORIGINS
// Configuration for CORS
// app.use(cors({
//     origin: function (origin, callback) {
//         if (!origin || ALLOWED_ORIGINS.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     }
// }));
