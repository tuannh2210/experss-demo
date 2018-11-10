var express = require('express');
// route
var router = express.Router();
// controllers
var authController = require('../controllers/auth.controller');

// var validate = require('../validate/auth.validate')

router.get('/login',authController.login );

router.post('/login',authController.postLogin );


module.exports = router