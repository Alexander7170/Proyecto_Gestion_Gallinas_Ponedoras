import {Router} from "express";
import {obtenerEmpleadosPorDNI, actualizarDNI, crearEmpleado, obtenerEmpleados, obtenerUsuarios, eliminarUsuario, actualizarDatosPersonales} from "../controllers/usuarioController.js";

const router = Router()

router.post("/", crearEmpleado);
router.get("/",obtenerUsuarios);
router.get("/empleados", obtenerEmpleados);
router.delete("/", eliminarUsuario);
router.put("/datosPersonales", actualizarDatosPersonales);
router.put("/dni", actualizarDNI);
router.get("/dni", obtenerEmpleadosPorDNI);
export default router;