import { json } from "express";
import * as usuarioModelo from "../models/empleadoModel.js";
import * as usuarioServicio from "../services/empleadoService.js";
import * as excepcion from "../excepciones/excepcion.js";


/* POST */

export const crearEmpleado = async(req,res)=>{
    try {
        const {nombre,apellido, dni, mail, contrasenia, activo, sueldo} = req.body;
        const metadata = await usuarioServicio.crearEmpleado(nombre,apellido,mail,contrasenia,dni,sueldo,activo);
        res.status(200).json({mensaje: `Se creo al empleado con id`});
    } catch (error) {
        analizarError(error,res);
    }
}

/* GET */

export const obtenerEmpleados = async(req,res)=>{
    try {
        const [empleados] = await usuarioModelo.selectEmpleados();
        res.status(200).json({payload: empleados});
    } catch (error) {
        analizarError(error, res)
    }
}
export const obtenerUsuarioPorDNI = async(req,res) =>{
    try {
        const [usuario, metadata] = await usuarioServicio.obtenerUsuarioPorDNI(req.body.dni);
        res.status(200).json({payload: usuario});
    } catch (error) {
        analizarError(error,res);    
    }
}

export const obtenerUsuariosPorNombre = async(req,res) =>{
    try {
        const [usuarios, metadata] = await usuarioServicio.obtenerUsuariosPorNombre(req.body.nombre);
        res.status(200).json({payload: usuarios});
    } catch (error) {
        analizarError(error, res);
    }
}

export const verMisDatosPersonales = async(req,res)=>{
}

/* PUT */

export const actualizarMisDatosPersonales = async(req,res)=>{
    try {
        const {id, nombre, apellido, mail, contrasenia} = req.body
        const metadata = await usuarioServicio.actualizarDatosPersonales(id, nombre, apellido, mail, contrasenia);
        res.status(200).json({mensaje:"Datos fueron modificados correctamente"});
    
    } catch (error) {
        analizarError(error,res);
    }
}

export const actualizarDNI = async(req,res)=>{
    try {
        const {id,dni} = req.body;
        const metadata = await usuarioServicio.actualizarDNI(id,dni);
        res.status(200).json({mensaje: "DNI actualizado correctamente"});
    } catch (error) {
        analizarError(error, res);
    }
}

export const actualizarSueldoDeUnEmpleado = async(req,res)=>{

}

export const actualizarActividadDeEmpleado = async(req,res)=>{

}

/*  DELETE */

export const eliminarUnEmpleado = async(req,res)=>{
    try {
        const metadata = await usuarioServicio.eliminarEmpleado(req.body.id);
        res.status(200).json({mensaje: "Eliminacion de empleado existosa"});
    } catch (error) {
        analizarError(error,res);
    }
}

/* Helper de analisis de error */

function analizarError(exception, res){
    if(exception instanceof excepcion.errorConEstado){
        if(exception instanceof excepcion.yaExisteEnSistemaError){
            return res.status(exception.codigoEstado).json({mensaje: exception.message, payload: exception.entidad});
        }
        res.status(exception.codigoEstado).json({mensaje:exception.message});
    }
    else{
        console.error(exception);
        res.status(500).json({mensaje:"Ocurrio un error interno del sistema"});
    }
}
