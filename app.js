import express from "express";
import routes from "./routes.js";

const app = express(); //ejecuta el framework 
app.use(express.json());

app.use(routes);

app.listen(3000, ()=>{
    console.log("Servidor escuchando en el puerto 3000");
});