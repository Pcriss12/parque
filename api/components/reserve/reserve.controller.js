var Reserve = require('./reserve.model.js');

module.exports.save = function(req, res){
  var newReserve = new Reserve({
    email : req.body.email,
    name : req.body.name,
    phone : req.body.phone,
    home : req.body.home,
    walk : req.body.walk,
    dateOn : req.body.dateOn,
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