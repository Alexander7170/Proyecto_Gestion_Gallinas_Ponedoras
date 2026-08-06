
import mysql2 from "mysql2/promise";
import enviorments from "../config/enviorments.js";

const database = enviorments.database;

export default mysql2.createPool({
    host: database.host,
    user: database.usuario,
    password: database.contrasenia,
    database: database.nombre 
});