import { Router } from "express";
import {
  getUsuarios,
  getUsuario,
  postUsuario,
} from "../controllers/usuarios.controllers.js";

const router = Router();

router.get("/usuarios", getUsuarios);
router.get("/usuarios/:idUsuario", getUsuario);
router.post("/usuarios", postUsuario);

export default router;
