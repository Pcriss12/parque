var Reserve = require('./reserve.model.js');
var nodemailer = require('nodemailer');

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

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'test170992@gmail.com',
      pass: '71737314Kevin'
    }
  });

  var mailOptions = {
    from: 'ParqueGermanico <test170992@gmail.com>',
    to: req.body.email,
    subject: 'Confirmación de reserva',
    text: req.body.email + ' ' + req.body.name + ' ' + req.body.homeA + ' ' + req.body.homeB + ' ' + req.body.homeC + ' ' + req.body.walk3 + ' ' + req.body.walk5 + ' ' + req.body.walk7 + ' ' + req.body.dateIn + ' ' + req.body.dateOff + ' ' + req.body.comment
    
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
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