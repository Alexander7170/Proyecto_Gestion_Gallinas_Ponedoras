import usuarioModelo from "../models/usuarioModel.js";
import errores from "../errores/index.js";

const actualizarDatosPersonales = async(id, nombre, apellido, mail, contrasenia)=>{
    await verificarID(id);
    await verificarMail(id, mail);
    return await usuarioModelo.updateDatosPersonales(id,nombre,apellido,mail,contrasenia);
}


const actualizarDNI = async(id,dni) =>{
    await verificarID(id);
    await verificarDNI(id,dni);
    return await usuarioModelo.updateDNI(id,dni);
}

const obtenerUsuarioPorDNI = async(dni)=>{
    const [usuario, metadata] = await usuarioModelo.selectUsuariosPorDNI(dni); 
    if(usuario.length === 0){
        throw new errores.noExisteEnsistemaError("No existe usuario con ese dni", 400);
    }
    return [usuario, metadata];
}

/* Helpers de verificaciones */

async function verificarID(id){
    const [usuario] = await usuarioModelo.selectEmpleadoPorID(id);
    if(usuario.length === 0){
        throw new errores.noExisteEnsistemaError("No se encontro el usuario " + id, 400);
    }
}

async function verificarMail(id, mail){
    const [usuario] = await usuarioModelo.estaMailOcupado(mail,id);
    if(usuario.length != 0){
        throw new errores.yaExisteEnSistemaError(`El mail esta ocupado`,400, usuario[0]);
    }
}

async function verificarDNI(id, dni){
    const [usuario] = await usuarioModelo.estaDNIOcupado(id,dni);
    if(usuario.length != 0){
        throw new errores.yaExisteEnSistemaError("El dni esta ocupado", 400, usuario[0]);
    }
}
export default{obtenerUsuariosPorDNI: obtenerUsuarioPorDNI,actualizarDatosPersonales, actualizarDNI}