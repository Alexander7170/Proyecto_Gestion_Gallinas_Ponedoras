
import mysql2 from "mysql2/promise";
import enviorments from "../config/enviorments";

const database = enviorments.database;

return mysql2.createPool({
    host: database.host,
    user: database.usuario,
    password: database.password,
    database: database.name  
});