import express from 'express';
// import cors from 'cors';
// , ALLOWED_ORIGINS
import { PORT } from './config.js';
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

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permite todas las solicitudes
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

app.use(express.json());
app.use(userRoutes);

app.listen(PORT);
console.log('Server on port', PORT);