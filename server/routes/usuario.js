//importar el modulo de expresss
const express = require("express");
// crear el objeto app
const app = express();

//CONFIGURAR LOS ENDPOINT PARA USUARIO
//get consultar datos
app.get('/usuario', (req, res) => {
    res.json("get usuario");
});

//post crear nuevos registros
app.post('/usuario', (req, res) => {
    res.json("post usuario");
});

//put actulizar registros
app.put('/usuario/:id', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            mensaje: "El nombre es necesario"

        });

    } else {

        res.json({
            persona: body
        });
    }
});

//delete  eliminar registros (cambiar a inactivo)
app.delete('/usuario', (req, res) => {
    res.json("delete usuario");
});

//EXPORTAR PARA QUE SE PUEDA UTILIZAR EN OTROS MODULOS
module.exports = app;