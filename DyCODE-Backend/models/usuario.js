var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        nombre: String,
        apellido: String,
        correo: String,
        plan:String,
        proyectos: Array,

    }
);

module.exports = mongoose.model('usuarios', esquema);