import express from "express";
import usuariosRouter from "./routes/usuarios.routes.js";

const app = express();

app.use(express.json());

app.use("/api", usuariosRouter);

app.listen(7000);
console.log("server iniciado");
