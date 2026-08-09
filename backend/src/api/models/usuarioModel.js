import conexion from "../database/db.js";

/* La constante COLUMNA representa las columnas de la tabla USUARIOS */
const COL =
    {ID: "id",
    NOMBRE: "nombre",
    APELLIDO: "apellido",
    CONTRASENIA: "contrasenia",
    MAIL:"mail",
    DNI: "dni",
    ACTIVO: "ACTIVO"
    }

/* La constante COLUMNA_EMP representa las columnas de la tabla EMPLEADOS */
const COL_EMP = {
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

const selectUsuariosPorNombre = (nombre) =>{
    const sql = `SELECT * FROM ${USUARIOS} WHERE ${COL.NOMBRE} = ?`;
    return conexion.query(sql,[nombre]);
}

const selectEmpleados = ()=>{
    const sql = "SELECT * FROM empleados";
    return conexion.query(sql);
};

const selectEmpleadoPorID = (id)=>{
    const sql = `SELECT ${COL.DNI}, ${COL.NOMBRE}, ${COL.APELLIDO} FROM ${USUARIOS} WHERE ${COL.ID} = ?`
    return conexion.query(sql, [id]);
}

const selectUsuarios = ()=>{
    const sql = "SELECT * FROM usuarios";
    return conexion.query(sql);
}

const selectUsuarioPorMail = (mail) =>{
    const sql = `SELECT * FROM ${USUARIOS} WHERE ${COL.MAIL} = ?`
    return conexion.query(sql, [mail]);
}

const selectUsuariosPorDNI = (dni)=>{
    const sql = `SELECT * FROM ${USUARIOS} WHERE ${COL.DNI} = ?`;
    return conexion.query(sql, [dni]);
}


const deleteUsuario = (id)=>{
    const sql = `DELETE FROM ${USUARIOS} WHERE ${COL.ID} = ?`;
    return conexion.query(sql, [id]);
}

const deleteEmpleado = (id)=>{
    const sql = `DELETE FROM ${EMPLEADOS} WHERE ${COL_EMP.ID} = ? `;
    return conexion.query(sql,[id]);
}

const updateDatosPersonales = (id, nombre, apellido, mail, contrasenia) => {
    const sql =
    `UPDATE ${USUARIOS} 
        SET ${COL.NOMBRE} = ?,${COL.APELLIDO} = ?,
        ${COL.MAIL} = ?, ${COL.CONTRASENIA} = ?
        WHERE ${COL.ID} = ?`;
    return conexion.query(sql,[nombre,apellido,mail,contrasenia,id]);
}
const updateDNI = (id, dni) =>{
    const sql = `UPDATE ${USUARIOS} SET ${COL.DNI} = ? WHERE ${COL.ID} = ?`
    return conexion.query(sql, [dni,id]);
} 

/* LLamadas a base de datos de verificaciones */

const estaMailOcupado = (mail, id) =>{
    const sql = `SELECT ${COL.ID},${COL.NOMBRE}, ${COL.APELLIDO}, ${COL.MAIL} FROM ${USUARIOS} WHERE ${COL.MAIL} = ? AND ${COL.ID} != ?`
    return conexion.query(sql, [mail,id]);
}

const estaDNIOcupado = (id,dni)=>{
    const sql = `SELECT ${COL.ID},${COL.NOMBRE}, ${COL.APELLIDO}, ${COL.DNI} FROM ${USUARIOS} WHERE ${COL.DNI} = ? AND ${COL.ID} != ?`
    return conexion.query(sql, [dni,id]);
}

export default 
{estaDNIOcupado,estaMailOcupado,selectUsuarioPorMail, selectEmpleadoPorID,selectUsuariosPorNombre, selectUsuariosPorDNI,deleteEmpleado, updateDNI,insertUsuario, insertEmpleado, selectEmpleados, selectUsuarios, deleteUsuario, updateDatosPersonales};