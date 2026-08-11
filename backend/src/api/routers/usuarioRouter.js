import {Router} from "express";
import {eliminarEmpleado,obtenerUsuariosPorNombre,obtenerUsuarioPorDNI, actualizarDNI, crearEmpleado, obtenerEmpleados, obtenerUsuarios, eliminarUsuario, actualizarDatosPersonales} from "../controllers/usuarioController.js";

const router = Router()

router.get("/",obtenerUsuarios);
router.get("/empleados", obtenerEmpleados);
router.get("/dni", obtenerUsuarioPorDNI);
router.get("/nombre", obtenerUsuariosPorNombre);
router.post("/", crearEmpleado);
router.put("/datosPersonales", actualizarDatosPersonales);
router.put("/dni", actualizarDNI);
router.delete("/", eliminarUsuario);
router.delete("/empleado",eliminarEmpleado);

export default router;