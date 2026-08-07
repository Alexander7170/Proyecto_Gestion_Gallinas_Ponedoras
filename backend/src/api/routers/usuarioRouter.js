import {Router} from "express";
import {crearEmpleado, verEmpleados, verUsuarios} from "../controllers/usuarioController.js";

const router = Router()

router.post("/", crearEmpleado);

router.get("/",verUsuarios);
router.get("/empleados", verEmpleados);


export default router;