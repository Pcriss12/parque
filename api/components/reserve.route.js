//Dependencies
var express = require('express');
var router = express.Router();
var reserveController = require('./reserve.controller.js');

//para aquellas rutas que ocupen un id
router.param('id', function(req, res, next, id) {
    req.body.id = id;
    next();
});

router.route('/save_reserve')
    .post(function(req, res) {
        reserveController.save(req, res);
    });

router.route('/get_all_reserve')
    .get(function(req, res) {
        reserveController.findAll(req, res);
    });

module.exports = router;
