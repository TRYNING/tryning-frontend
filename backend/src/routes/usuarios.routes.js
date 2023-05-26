import { Router } from "express";
import {
  getUsuarios,
  getUsuario,
  postUsuario,
  patchUsuario,
} from "../controllers/usuarios.controllers.js";

// Crear una instancia del enrutador de Express
const router = Router();

// Definir las rutas y los controladores asociados

// Ruta para obtener todos los usuarios
router.get("/usuarios", getUsuarios);

// Ruta para obtener un usuario específico por su ID
router.get("/usuarios/:idUsuario", getUsuario);

// Ruta para crear un nuevo usuario
router.post("/usuarios", postUsuario);

// Ruta para actualizar un usuario existente por su ID
router.patch("/usuarios/:idUsuario", patchUsuario);

// Exportar el enrutador para su uso en otros archivos
export default router;
