import { json } from "express";
import usuarioModelo from "../models/usuarioModel.js";
import usuarioServicio from "../services/usuarioService.js";
import errores from "../errores/index.js";
import usuarioModel from "../models/usuarioModel.js";
export const crearEmpleado = async(req,res)=>{
    try {
        const {nombre,apellido, dni, mail, contrasenia, activo, sueldo} = req.body;
        const [resultadoUsuario] = await usuarioModelo.insertUsuario(nombre,apellido,mail,contrasenia,dni,activo);

        if(resultadoUsuario.affectedRows == 0){
            return res.status(400).json({mensaje: "No se inserto ningun usuario"})
        }
        const id = resultadoUsuario.insertId;
        const [resultadoEmpleado] = await usuarioModelo.insertEmpleado(id,sueldo);
        
        if(resultadoEmpleado.affectedRows == 0){
            return res.status(400).json({mensaje: "No se inserto ningun empleado"})
        }

        return res.status(200).json({mensaje:`Se inserto empleado con id: ${id}`})
    } catch (error) {
        mostrarResultadoError(error);
    }
}

export const obtenerEmpleados = async(req,res)=>{
    try {
        const [empleados] = await usuarioModelo.selectEmpleados();
        if(empleados.length == 0){
            return res.status(204)
        }
        res.status(200).json({payload: empleados});
    } catch (error) {
        mostrarResultadoError(error);
    }
}

export const obtenerUsuarios = async(req,res)=>{
    try {
        const [usuarios] = await usuarioModelo.selectUsuarios();
        if(usuarios.length == 0){
            return res.status(204);
        }
        res.status(200).json({payload: usuarios});
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Ocurrio un error critico del sistema"});
    }
}

export const obtenerUsuarioPorDNI = async(req,res) =>{
    try {
        console.log(req.body.dni);
        const [usuario, metadata] = await usuarioServicio.obtenerUsuarioPorDNI(req.body.dni);
        res.status(200).json({payload: usuario[0]});
    } catch (error) {
        analizarError(error,res);    
    }
}

export const obtenerUsuarioPorNombre = async(req,res) =>{
    try {
        const [empleadosFiltrados, metadata] = await usuarioModelo.selectUsuariosPorNombre(req.body.nombre);
        if(empleadosFiltrados.length === 0){
            return res.status(200).json({mensaje:"No se encontro un nombre asi"});
        }
        res.status(200).json({payload: empleadosFiltrados});
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Ocurrio un error interno"});
    }
}


export const eliminarUsuario = async(req,res) =>{
    try {
        const [resultado] = await usuarioModelo.deleteUsuario(req.body.id);
        if(resultado.affectedRows == 0){
            return res.status(400).json({mensaje: "No se encontro un usuario con ese id"});
        }
        res.status(200).json({mensaje: "Usuario fue eliminado exitosamente"});
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Ocurrio un error critico del sistema"});
    }
}

export const eliminarEmpleado = async(req,res)=>{
    try {
        const [metadataDeleteEmp] = await usuarioModelo.deleteEmpleado(req.body.id);
        res.status(200).json({mensjae: "Eliminacion de empleado existosa"});
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Ocurrio un error critico del sistema"});    
    }
    
    
}

export const actualizarDatosPersonales = async(req,res)=>{
    try {

        const {id, nombre, apellido, mail, contrasenia} = req.body
        const [metadata] = await usuarioServicio.actualizarDatosPersonales(id, nombre, apellido, mail, contrasenia)

        if(metadata.affectedRows === 0){
            //Si en el caso de que haya mas de un dueño, hay probabilidades de que ambos hayan intentado modificar el mismo usuario
            // y que hayan cambiado las mismas columnas a los mismos datos, lo que hace que un dueño ejecute correctamente pero el otro, porque otro ya lo hizo.
            // Por ahora solo hay un dueño en este sistema.
            return res.status(200).json({mensaje: "No se modificado nada"}); 
        }
        res.status(200).json({mensaje:"Datos fueron modificados correctamente"});
    
    } catch (error) {
        analizarError(error,res);
    }
}

export const actualizarDNI = async(req,res)=>{
    try {
        const {id,dni} = req.body;
        const [metadata] = await usuarioServicio.actualizarDNI(id,dni);
        if(metadata.affectedRows === 0){
            return res.status(200).json({mensaje: "DNI no se modifico"})
        }
        res.status(200).json({mensaje: "DNI actualizado correctamente"});
    } catch (error) {
        analizarError(error, res);
    }
}

function analizarError(error, res){
    if(error instanceof errores.yaExisteEnSistemaError){
        return res.status(error.codigoEstado).json({mensaje: error.message, payload: error.entidad});
    }
    else if(error instanceof errores.errorLogica){
        return res.status(error.codigoEstado).json({mensaje:error.message});
    }
    else{
        console.error(error);
        res.status(500).json({mensaje:"Ocurrio un error interno del sistema"});
    }
}
