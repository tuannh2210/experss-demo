var express = require('express');
var multer  = require('multer')
// controllers
var userController = require('../controllers/user.controller');
var validate = require('../validate/user.validate')
var upload = multer({ dest: './public/uploads/' })

// route
var router = express.Router();

router.get('/', userController.index);

router.get('/search', userController.search);

router.get('/create', userController.create);
//route params
router.get('/:id',userController.detailUser);

router.post('/create',
	upload.single('avatar'),
	validate.postCreate,
	userController.postCreate
 );


module.exports = router