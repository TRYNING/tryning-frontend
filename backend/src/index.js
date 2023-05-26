import express from "express";

// Importamos los enrutadores desde sus respectivos archivos
import usuariosRouter from "./routes/usuarios.routes.js";
import entrenadoresRouter from "./routes/entrenadores.routes.js";

const app = express();

app.use(express.json());

// Configurar las rutas para los usuarios y entrenadores
app.use("/api", usuariosRouter);
app.use("/api", entrenadoresRouter);

// Iniciar el servidor y escuchar en el puerto 7000
app.listen(7000);

// Imprimir un mensaje en la consola cuando el servidor se inicie correctamente
console.log("server iniciado");
