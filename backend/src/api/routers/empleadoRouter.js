import {Router} from "express";
import {eliminarUnEmpleado,actualizarSueldoDeUnEmpleado,obtenerUsuariosPorNombre,obtenerUsuarioPorDNI, actualizarDNI, crearEmpleado, obtenerEmpleados, actualizarMisDatosPersonales, verMisDatosPersonales} from "../controllers/empleadoController.js";

const router = Router()

/* Tengo que verificar si todo esta bien, porque cambie el nombre del archivo de usuarioService, usuarioModelo, usuarioControlador, y usuarioService por el de empleado
    Ademas de que en usuarioModels, tengo que eliminar los metodos rebundantes, implementar el metodo que permite traer eos datos personales de un id.
    Verificar la eliminacion de empleado, que se elimine de usuario y de empleado, no puede haber un empleado huerfano.
    
*/

router.get("/", obtenerEmpleados);
router.get("/dni", obtenerUsuarioPorDNI);
router.get("/nombre", obtenerUsuariosPorNombre);
router.post("/", crearEmpleado);
router.put("/datosPersonales", actualizarMisDatosPersonales);
router.put("/dni", actualizarDNI);
router.put("/sueldo", actualizarSueldoDeUnEmpleado);
router.delete("/", eliminarUnEmpleado);

export default router;