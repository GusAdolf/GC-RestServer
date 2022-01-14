require('./config/config');

const express = require("express");
const bodyParser = require("body-parser");
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


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

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto", process.env.PORT);
});