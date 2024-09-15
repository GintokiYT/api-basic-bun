import express, { Express } from "express";
import router from "./routes/index";
import { corsConfig } from "./utils/cors";
import "dotenv"

const PORT = process.env.PORT || 3000;

const app: Express = express();

app.use(corsConfig());
// app.

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Servidor en el puerto http://localhost:${PORT}`);
})