import usuarioModelo from "../models/usuarioModel.js";

export const crearEmpleado = async(req,res)=>{
    try {
        const {nombre, apellido, dni, mail, contrasenia, activo, sueldo} = req.body;
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
        console.error(error);
        res.status(500).json({
            mensaje: "ocurrio un error critico"
        })
    }
}