import {Router} from "express";
import {actualizarDNI, crearEmpleado, verEmpleados, verUsuarios, eliminarUsuario, actualizarDatosPersonales} from "../controllers/usuarioController.js";

const router = Router()

router.post("/", crearEmpleado);
router.get("/",verUsuarios);
router.get("/empleados", verEmpleados);
router.delete("/", eliminarUsuario);
router.put("/datosPersonales", actualizarDatosPersonales);
router.put("/dni", actualizarDNI);
export default router;