import * as usuarioModelo from "../models/empleadoModel.js";
import * as excepcion from "../excepciones/excepcion.js";

/* Si hay un metodo que modifique tabla o varias, secuencialmente y no en una misma query, no implemente nada si falla la primera query y la segunda no.
    Por ejemplo en el eliminarUsuario: Aca primero se elimina el empleado, si salio bien, se eliminara el usuario, pero si sale mal, no hay rollback y va a ver
    problema de consistencia.
*/

/* Servicios de POST */

// Si existe un ID = 0 entonces se rompe mi sistema
export const crearEmpleado = async(nombre,apellido,mail,contrasenia,dni,sueldo, activo)=>{
    await verificarMailDuplicado(0, mail);
    await verificarDNIDuplicado(0, dni);
    verificarSueldo(sueldo);

    const [metadataUser] = await usuarioModelo.insertUsuario(nombre,apellido,mail,contrasenia,dni,activo);
    console.log(metadataUser);
    if(metadataUser.affectedRows === 0){
        throw new excepcion.errorConEstado("No se pudo ejecutar la accion, tal parece que el USUARIO no a sido agregado");
    }
    const [metadataEmp] = await usuarioModelo.insertEmpleado(metadataUser.insertId, sueldo);
    if(metadataEmp.affectedRows === 0 ){
        throw new excepcion.errorConEstado("No se pudo ejecutar la accion, tal parece que el EMPLEADO no a sido agregado pero si el usuario");
    }

    return metadataEmp;
}

/* Servicio de GET, FILTRACIONES */

export const obtenerUsuarioPorDNI = async(dni)=>{
    const [usuario, metadata] = await usuarioModelo.selectUsuariosPorDNI(dni); 
    return [usuario, metadata];
}

export const obtenerUsuariosPorNombre = async(nombre)=>{
    const [usuario, metadata] = await usuarioModelo.selectUsuariosPorNombre(nombre);
    return [usuario, metadata];
}

/* Servicios de UPDATE */

export const actualizarDatosPersonales = async(id, nombre, apellido, mail, contrasenia)=>{
    await verificarMailDuplicado(id, mail);
    const [metadata] = await usuarioModelo.updateDatosPersonales(id,nombre,apellido,mail,contrasenia);
    console.log(metadata);
    if(metadata.affectedRows === 0){
        throw new excepcion.noExisteEnsistemaError("El usuario no existe en sistema");
    }
    if(metadata.changedRows === 0){
        throw new excepcion.errorConEstado("No a modificado nada");
    }
    return metadata;
}

export const actualizarDNI = async(id,dni) =>{
    await verificarDNIDuplicado(id,dni);
    const [metadata] = await usuarioModelo.updateDNI(id,dni);
    console.log(metadata);
    if(metadata.affectedRows === 0){
        throw new excepcion.noExisteEnsistemaError("EL usuario no existe en sistema");
    }
    if(metadata.changedRows === 0){
        throw new excepcion.errorConEstado("El dni es el mismo")
    }
    return metadata;
}

export const actualizarSueldo = async(id,sueldo)=>{
    verificarSueldo(sueldo);
    const [metadata] = await usuarioModelo.updateSueldo(id,sueldo);
    if(metadata.affectedRows === 0){
        throw new excepcion.noExisteEnsistemaError("No se modifico el sueldo porque no existe el usuario");
    }
    return metadata;
}

/* Servicio de DELETE */

export const eliminarEmpleado = async(id)=>{
    const [metadata] = await usuarioModelo.deleteEmpleado(id);
    console.log(metadata);
    if(metadata.affectedRows === 0){
        throw new excepcion.noExisteEnsistemaError("El Empleado no existe en sistema");
    }
    const [metada] = await usuarioModelo.deleteUsuario(id);
    return metadata;
} 


/* Helpers de verificaciones */
async function verificarMailDuplicado(id, mail){
    const [usuario] = await usuarioModelo.selectUsuarioPorMail(mail);
    if(usuario.length != 0 && usuario[0].id != id){
        throw new excepcion.yaExisteEnSistemaError(`El mail esta ocupado`, usuario[0]);
    }
}

async function verificarDNIDuplicado(id, dni){
    const [usuario] = await usuarioModelo.selectUsuariosPorDNI(dni);
    if(usuario.length != 0 && usuario[0].id != id){
        throw new excepcion.yaExisteEnSistemaError("El dni esta ocupado", usuario[0]);
    }
}

function verificarSueldo(sueldo){
    if(sueldo == undefined)throw new Error("El sueldo es undefined o null");
    if(sueldo < 0)throw new excepcion.sueldoNegativo();
}