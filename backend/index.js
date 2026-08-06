import express from "express";
import cors from "cors";
import enviorments from "./src/api/config/environment.js";
import usuarioRouter from "./src/api/routers/usuarioRouter.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/empleados", usuarioRouter);
app.listen(enviorments.puerto, ()=>{
    console.log(`Sistema levantado en puerto ${enviorments.puerto}`);
})

