import express from "express";
import routes from "./routes.js"

const app = express();

//indicando para o express ler o body com json
app.use(express.json());

// Usar o routes depois do app
app.use(routes)

export default app;
