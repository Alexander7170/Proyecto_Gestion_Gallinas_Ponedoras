import conexion from "../database/db.js";


const insertUsuario = (nombre, apellido, mail, contrasenia, dni, activo )=>{
    const sql = "INSERT INTO usuarios(nombre,apellido,mail,dni,activo,contrasenia) VALUES(?,?,?,?,?,?)"
    return conexion.query(sql,[nombre,apellido, mail,dni,activo,contrasenia]);
};
const insertEmpleado = (idUsuario, sueldo)=>{
    const sql = "INSERT INTO empleados(id_usuario, sueldo) VALUES (?,?)"
    return conexion.query(sql,[idUsuario,sueldo]);
};
const selectEmpleados = ()=>{
    const sql = "SELECT * FROM empleados";
    return conexion.query(sql);
};
export default {insertUsuario, insertEmpleado}