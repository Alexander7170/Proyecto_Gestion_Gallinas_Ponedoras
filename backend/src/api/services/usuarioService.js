import usuarioModelo from "../models/usuarioModel.js";
import errores from "../errores/index.js";

const verificarUsuarioPorID = async(id)=>{
    const [usuario] = await usuarioModelo.selectEmpleadoPorID(id);
    if(usuario.length === 0){
        throw new errores.NO_EXISTE_EN_SISTEMA("No se encontro el usuario", 400);
    }
}

export default{verificarUsuarioPorID};