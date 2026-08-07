import {Router} from "express";
import {crearEmpleado, verEmpleados, verUsuarios, eliminarUsuario} from "../controllers/usuarioController.js";

const router = Router()

router.post("/", crearEmpleado);

router.get("/",verUsuarios);
router.get("/empleados", verEmpleados);
router.delete("/", eliminarUsuario);

export default router;