var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');

// ruta para obtener todos los usuarios: https://localhost:8888/usuarios
router.get('/', function(req, res){
    usuario.find({}, {nombre: true, apellido: true})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
});

module.exports = router;