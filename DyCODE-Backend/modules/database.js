var mongoose = require('mongoose');

var servidor = 'localhost:27017';
var db = 'dycode';

class Database{
    constructor(){
        mongoose.connect(`mongodb://${servidor}/${db}`)
        .then(()=>{
            console.log('Se conectó a la base de datos de DyCODE');
        }).catch((error)=>{
            console.log(error);
        });
    }
}

module.exports = new Database();