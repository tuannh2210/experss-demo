var db = require('../db');
var md5 = require('md5');

module.exports.login =  function(req, res) {
	res.render('auth/login');
};

module.exports.postLogin = function(req,res){
	var email = req.body.email
	var password = req.body.password

	var user = db.get('users').find({email: email}).value();

	if(!user){
		res.render('auth/login',{
			errors:[
				'user not found'
			]
		});
		return;
	}
	var hashedPassword = md5(password)
	if(hashedPassword !== user.password ){
		res.render('auth/login',{
			errors:[
				'passs not found'
			]
		});
		return;
	}
	res.cookie('userId', user.id,{
		signed: true
	})
	res.redirect('/users')
	
}