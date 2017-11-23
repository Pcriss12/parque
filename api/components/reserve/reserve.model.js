//Dependencias
var mongoose = require('mongoose');
//Creando esquemas
var ReserveSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    phone : { type: String},
    homeA : { type: String},
    homeB : { type: String},
    homeC : { type: String},
    walk3 : { type: String},
    walk5 : { type: String},
    walk7 : { type: String},
    dateIn : { type: Date, required: true },
    dateOff : { type: Date, required: true },
    comment : { type: String}
});

module.exports = mongoose.model('Reserve', ReserveSchema);
