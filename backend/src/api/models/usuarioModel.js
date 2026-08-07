import conexion from "../database/db.js";

const TABLA_COLUMNAS =
    {ID: "id_usuario",
    NOMBRE: "nombre",
    MAIL:"mail"
    }
const TABLA_NOMBRE = "usuarios";

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
const selectUsuarios = ()=>{
    const sql = "SELECT * FROM usuarios";
    return conexion.query(sql);
}

const deleteUsuario = (id)=>{
    const sql = `DELETE FROM ${TABLA_NOMBRE} WHERE ${TABLA_COLUMNAS.ID} = ?`;
    return conexion.query(sql, [id]);
}
export default 
{insertUsuario, insertEmpleado, selectEmpleados, selectUsuarios, deleteUsuario};