var express = require('express');
// route
var router = express.Router();
// controllers
var userController = require('../controllers/user.controller');


router.get('/', userController.index);
router.get('/search', userController.search);
router.get('/create', userController.create)				
router.post('/create',userController.postCreate)
//route params
router.get('/:id',userController.detailUser);

module.exports = router 