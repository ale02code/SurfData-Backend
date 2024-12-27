import express from 'express';
import 'dotenv/config';

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log("Servidor on port " + PORT) });