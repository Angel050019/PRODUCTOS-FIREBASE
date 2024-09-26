const express = require("express");
//const usuariosRutas = require("./rutas/rutasUsuarios");
const productosRutas = require("./rutas/rutasProductos");
const usuariosRutas=require("./rutas/rutasUsuarios");

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//app.use("/",productosRutas);
app.use("/", usuariosRutas);

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Servidor en http://localhost:"+port)
});