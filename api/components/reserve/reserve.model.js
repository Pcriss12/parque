//Dependencias
var mongoose = require('mongoose');
//Creando esquemas
var ReserveSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    phone : { type: String, required: true },
    home : { type: String, required: true },
    walk : { type: String, required: true },
    dateOn : { type: Date, required: true },
    dateOff : { type: Date, required: true },
    comment : { type: String, required: true }
});

module.exports = mongoose.model('Reserve', ReserveSchema);
