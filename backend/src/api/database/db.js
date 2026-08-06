
import mysql2 from "mysql2/promise";
import environment from "../config/environment.js";

const database = environment.database;

export default mysql2.createPool({
    host: database.host,
    user: database.usuario,
    password: database.contrasenia,
    database: database.nombre 
});