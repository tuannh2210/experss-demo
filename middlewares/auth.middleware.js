// var db = require('../db');

var User = require('../models/user.model')

module.exports.requiredAuth = async function(req, res, next) {
	// var email = req.body.email
	// var password = req.body.password

	if(!req.signedCookies.userId){
		res.render('auth/login');
		return;
	}
	var user = await User.find({
		id: req.signedCookies.userId
	});

	if(!user){
		res.render('auth/login')
	}
	res.locals.user = user;
	
	next()

}