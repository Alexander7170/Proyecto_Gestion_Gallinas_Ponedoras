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

export const insertUsuario = (nombre, apellido, mail, contrasenia, dni, activo )=>{
    const sql = `INSERT INTO ${USUARIOS}(${COL.NOMBRE}, ${COL.APELLIDO},${COL.DNI}, ${COL.ACTIVO}, ${COL.MAIL}, ${COL.CONTRASENIA}) VALUES (?,?,?,?,?,?)`
    return conexion.query(sql,[nombre,apellido,dni,activo,mail,contrasenia]);
};
export const insertEmpleado = (idUsuario, sueldo)=>{
    const sql = `INSERT INTO ${EMPLEADOS} (${COL_EMP.ID}, ${COL_EMP.SUELDO}) VALUES (?,?)`
    return conexion.query(sql,[idUsuario,sueldo]);
};

export const selectUsuariosPorNombre = (nombre) =>{
    const sql = `SELECT * FROM ${USUARIOS} WHERE ${COL.NOMBRE} = ?`;
    return conexion.query(sql,[nombre]);
}

export const selectEmpleados = ()=>{
    const sql = "SELECT * FROM empleados";
    return conexion.query(sql);
};

export const selectEmpleadoPorID = (id)=>{
    const sql = `SELECT ${COL.DNI}, ${COL.NOMBRE}, ${COL.APELLIDO} FROM ${USUARIOS} WHERE ${COL.ID} = ?`
    return conexion.query(sql, [id]);
}

export const verificarExisteEmpleado = (id)=>{
    const sql = 
    `SELECT ${USUARIOS}.${COL.DNI}, ${USUARIOS}.${COL.NOMBRE}, ${USUARIOS}.${COL.APELLIDO}
    from ${USUARIOS}
    INNER JOIN ${EMPLEADOS} ON ${USUARIOS}.${COL.ID} = ${EMPLEADOS}.${COL_EMP.ID}
    WHERE ${COL_EMP.ID} =  ?`;
    return conexion.query(sql, [id]);
}

export const selectUsuarios = ()=>{
    const sql = "SELECT * FROM usuarios";
    return conexion.query(sql);
}

export const selectUsuarioPorMail = (mail) =>{
    const sql = `SELECT * FROM ${USUARIOS} WHERE ${COL.MAIL} = ?`
    return conexion.query(sql, [mail]);
}

export const selectUsuariosPorDNI = (dni)=>{
    const sql = `SELECT * FROM ${USUARIOS} WHERE ${COL.DNI} = ?`;
    return conexion.query(sql, [dni]);
}


export const deleteUsuario = (id)=>{
    const sql = `DELETE FROM ${USUARIOS} WHERE ${COL.ID} = ?`;
    return conexion.query(sql, [id]);
}

export const deleteEmpleado = (id)=>{
    const sql = `DELETE FROM ${EMPLEADOS} WHERE ${COL_EMP.ID} = ? `;
    return conexion.query(sql,[id]);
}

export const updateDatosPersonales = (id, nombre, apellido, mail, contrasenia) => {
    const sql =
    `UPDATE ${USUARIOS} 
        SET ${COL.NOMBRE} = ?,${COL.APELLIDO} = ?,
        ${COL.MAIL} = ?, ${COL.CONTRASENIA} = ?
        WHERE ${COL.ID} = ?`;
    return conexion.query(sql,[nombre,apellido,mail,contrasenia,id]);
}
export const updateDNI = (id, dni) =>{
    const sql = `UPDATE ${USUARIOS} SET ${COL.DNI} = ? WHERE ${COL.ID} = ?`
    return conexion.query(sql, [dni,id]);
} 

/* LLamadas a base de datos de verificaciones */

export const estaMailOcupado = (mail, id) =>{
    const sql = `SELECT ${COL.ID},${COL.NOMBRE}, ${COL.APELLIDO}, ${COL.MAIL} FROM ${USUARIOS} WHERE ${COL.MAIL} = ? AND ${COL.ID} != ?`
    return conexion.query(sql, [mail,id]);
}

export const estaDNIOcupado = (id,dni)=>{
    const sql = `SELECT ${COL.ID},${COL.NOMBRE}, ${COL.APELLIDO}, ${COL.DNI} FROM ${USUARIOS} WHERE ${COL.DNI} = ? AND ${COL.ID} != ?`
    return conexion.query(sql, [dni,id]);
}