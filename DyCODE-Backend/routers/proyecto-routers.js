// Router con los web services de proyectos.
var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');

/**
 * Servicio para listar todos los proyectos.
 * Servicio para crear un proyecto.
 * Servicio para obtener un solo proyecto
 */
// Web service para listar todos los proyectos.
// ruta: localhost:8888/:idUsuario/proyectos
router.get('/:idUsuario/proyectos', function(req, res){
    usuario.find({},{proyectos:true}).then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});

// Web service para ver el detalle de un proyecto.
// ruta: localhost:8888/:idUsuario/proyectos/:idProyecto

router.get('/:idUsuario/proyectos/:idProyecto', function (req, res){
    
    usuario.find(
        
        {
            _idUsuario: mongoose.Types.ObjectId(req.params.idUsuario),
            "proyectos._idProyecto": mongoose.Types.ObjectId(req.params.idPProyecto)
        }, 
        
        {
            "proyectos.$": true
        }) 
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })   
});
// Web service para crear un nuevo proyecto.
// ruta: localhost:8888/:idUsuario/proyectos
router.post('/:idUsuario/proyectos', function(req, res){
    proyecto.update(
        {
            _idUsuario: mongoose.Types.ObjectId(req.params.idUsuario)
        },
        {
            $push:{
                proyectos:{
                    _idProyecto: mongoose.Types.ObjectId(),
                    nombreProyecto: req.body.nombre,
                    descripcionProyecto: req.body.descripcion,
                    carpetas: []
                }
            }
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});





module.exports = router;