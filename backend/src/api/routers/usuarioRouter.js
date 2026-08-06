import {Router} from "express";
import {crearEmpleado} from "../controllers/usuarioController.js";

const router = Router()

router.post("/", crearEmpleado);

export default router;