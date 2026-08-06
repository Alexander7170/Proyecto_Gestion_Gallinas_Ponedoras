import dotenv from "dotenv";

/* Esta funcion buscan el archivo .env y las carga*/
dotenv.config()

export default{
    puerto: process.env.PUERTO || 3001,
    database:{
        usuario: process.env.DB_USUARIO,
        contrasenia: process.env.DB_CONTRASENIA,
        host: process.env.DB_HOST,
        nombre: process.env.DB_NOMBRE
    }
}
