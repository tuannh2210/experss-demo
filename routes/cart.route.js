var express = require('express');
// route
var router = express.Router();
// controllers
var controller = require('../controllers/cart.controller')
// var authController = require('../controllers/auth.controller');

router.get('/add/:productId',controller.addToCard)

module.exports = router