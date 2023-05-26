import { Router } from "express";
import {
  getEntrenadores,
  getEntrenador,
  postEntrenador,
} from "../controllers/entrenadores.controllers.js";

// Creamos una instancia del enrutador de Express
const router = Router();

// Definimos las rutas y los controladores asociados

// Ruta para obtener todos los entrenadores
router.get("/entrenadores", getEntrenadores);

// Ruta para obtener un entrenador específico por su ID
router.get("/entrenadores/:idEntrenador", getEntrenador);

// Ruta para crear un nuevo entrenador
router.post("/entrenadores", postEntrenador);

// Exportamos el enrutador para que pueda ser utilizado en otros archivos
export default router;
