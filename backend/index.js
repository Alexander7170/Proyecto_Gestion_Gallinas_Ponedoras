import express from "express";
import cors from "cors";
import enviorments from "./src/api/config/enviorments.js";
const app = express();
app.use(cors());
app.listen(enviorments.puerto, ()=>{
    console.log(`Sistema levantado en puerto ${enviorments.puerto}`);
})

