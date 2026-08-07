import conexion from "../database/db.js";

/* La constante COLUMNA representa las columnas de la tabla USUARIOS */
const COLUMNA =
    {ID: "id_usuario",
    NOMBRE: "nombre",
    APELLIDO: "apellido",
    CONTRASENIA: "contrasenia",
    MAIL:"mail",
    DNI: "dni",
    ACTIVO: "ACTIVO"
    }

/* La constante COLUMNA_EMP representa las columnas de la tabla EMPLEADOS */
const COLUMNA_EMP = {
    ID: "id_usuario",
    SUELDO: "sueldo"
}
/* La constante USUARIOS representa el NOMBRE de la tabla usuarios de la base de datos*/
const USUARIOS = "usuarios";


/* La constante EMPLEADOS representa el NOMBRE de la tabla empleados de la base de datos*/
const EMPLEADOS = "empleados";

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
    const sql = `DELETE FROM ${USUARIOS} WHERE ${COLUMNA.ID} = ?`;
    return conexion.query(sql, [id]);
}

const updateDatosPersonales = (id, nombre, apellido, mail, contrasenia) => {
    const sql =
    `UPDATE ${USUARIOS} 
        SET ${COLUMNA.NOMBRE} = ?,${COLUMNA.APELLIDO} = ?,
        ${COLUMNA.MAIL} = ?, ${COLUMNA.CONTRASENIA} = ?
        WHERE ${COLUMNA.ID} = ?`;
    return conexion.query(sql,[nombre,apellido,mail,contrasenia,id]);
}
const updateDNI = (id, dni) =>{
    const sql = `UPDATE ${USUARIOS} SET ${COLUMNA.DNI} = ? WHERE ${COLUMNA.ID} = ?`
    return conexion.query(sql, [dni,id]);
} 
export default 
{updateDNI,insertUsuario, insertEmpleado, selectEmpleados, selectUsuarios, deleteUsuario, updateDatosPersonales};