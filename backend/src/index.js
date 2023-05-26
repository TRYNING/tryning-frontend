import express from "express";
import usuariosRouter from "./routes/usuarios.routes.js";
import entrenadoresRouter from "./routes/entrenadores.routes.js";

const app = express();

app.use(express.json());

app.use("/api", usuariosRouter);
app.use("/api", entrenadoresRouter);

app.listen(7000);
console.log("server iniciado");
