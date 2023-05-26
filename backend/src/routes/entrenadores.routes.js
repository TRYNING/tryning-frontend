import { Router } from "express";
import {
  getEntrenadores,
  getEntrenador,
  postEntrenador,
} from "../controllers/entrenadores.controllers.js";

const router = Router();

router.get("/entrenadores", getEntrenadores);
router.get("/entrenadores/:idEntrenador", getEntrenador);
router.post("/entrenadores", postEntrenador);

export default router;
