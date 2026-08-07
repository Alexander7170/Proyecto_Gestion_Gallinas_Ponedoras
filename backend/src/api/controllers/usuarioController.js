import usuarioModelo from "../models/usuarioModel.js";

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

export const verEmpleados = async(req,res)=>{
    try {
        const [empleados] = await usuarioModelo.selectEmpleados();
        if(empleados.length == 0){
            req.status(204)
        }
        res.status(200).json({payload: empleados});
    } catch (error) {
        mostrarResultadoError(error);
    }
}

export const verUsuarios = async(req,res)=>{
    try {
        const [usuarios] = await usuarioModelo.selectUsuarios();
        if(usuarios.length == 0){
            req.status(204);
        }
        res.status(200).json({payload: usuarios});
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Ocurrio un error critico del sistema"});
    }
}

export const eliminarUsuario = async(req,res) =>{
    try {
        const [resultado] = await usuarioModelo.deleteUsuario(req.body.id);
        if(resultado.affectedRows == 0){
            res.status(400).json({mensaje: "No se encontro un usuario con ese id"});
        }
        res.status(200).json({mensaje: "Usuario fue eliminado exitosamente"});
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Ocurrio un error critico del sistema"});
    }
}

export const actualizarDatosPersonales = async(req,res)=>{
    try {
        const {id, nombre, apellido, mail, contrasenia} = req.body
        const [metadata] = await usuarioModelo.updateDatosPersonales(id,nombre,apellido,mail,contrasenia);
        return res.status(200).json({mensaje:"Datos fueron modificados correctamente"});
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Ocurrio un error critico del sistema"});
    }
}

export const actualizarDNI = async(req,res)=>{
    try {
        const {id,dni} = req.body;
        const [metadata] = await usuarioModelo.updateDNI(id, dni);
        return res.status(200).json({mensaje: "DNI actualizado correctamente"});
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Ocurrio un error al actualizar DNI, vuelva a intentarlo mas tarde"});
    }
}