import express from "express";
import enviorments from "./src/api/config/enviorments.js";
const app = express();
app.listen(enviorments.puerto, ()=>{
    console.log(`Sistema levantado en puerto ${enviorments.puerto}`);
})

