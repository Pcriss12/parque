var Reserve = require('./reserve.model.js');

module.exports.save = function(req, res){
  var newReserve = new Reserve({
    email : req.body.email,
    name : req.body.name,
    phone : req.body.phone,
    homeA : req.body.homeA,
    homeB : req.body.homeB,
    homeC : req.body.homeC,
    walk3 : req.body.walk3,
    walk5 : req.body.walk5,
    walk7 : req.body.walk7,
    dateIn : req.body.dateIn,
    dateOff : req.body.dateOff,
    comment : req.body.comment
  });
//Guardar solicitud
  newReserve.save(function(err){
    if(err){
      res.json({success:false, msg:'No se envió la solicitud' + err});
    }else{
      res.json({success:true, msg:'Se envió la solicitud'});
    }
  });
}

//Obtener la lista de solicitudes
module.exports.findAll = function(req,res){
  Reserve.find().then(function(request){
    res.send(request); //Envía la respuesta
  })
}