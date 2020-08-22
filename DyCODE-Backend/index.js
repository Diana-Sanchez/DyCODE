var express = require('express');
var cors = require('cors'); 
var bodyParser = require('body-parser');
var database = require('./modules/database');

// Inclusión de los routers.
var proyectosRouter = require('./routers/proyecto-routers');
var carpetasRouter = require('./routers/carpeta-routers');
var archivosRouter = require('./routers/archivo-routers');


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Definicipon de middlewares.
app.use('/usuarios', proyectosRouter);
app.use('/usuarios', carpetasRouter);
app.use('/usuarios', archivosRouter);


app.listen(8888, ()=>{
    console.log('Servidor del backend levantado en el puerto 8888');
});