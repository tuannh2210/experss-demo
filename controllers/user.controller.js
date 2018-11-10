var User = require('../models/user.model')

module.exports.index = async function(req, res) {
	var users = await User.find();
	res.render('user/index',{
		users: users
	})
};

module.exports.search = async function(req, res) {
	// var q = req.query.q;
	// var matchedUsers = db.get('users').value().filter(function(user) {
		
	// 	return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	// });
	// res.render('user/index', {
	// 	users: matchedUsers,
	// 	q // q is keyword search
	// });

	// var matchedUsers = await User.find();
	// 	return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	// res.render('user/index',{
	// 	users:matchedUsers,
	// 	q
	// })
}

module.exports.create = function(req, res, next) {
	res.render('user/create', {
		// csrfToken: req.csrfToken()
	});
}

module.exports.postCreate =  function(req, res) {
	req.body.id = shortid.generate();
	if(req.file){
		var pathImg = 
		req.body.avatar = req.file.path
							.replace(/\\/g,"/")
							.split('/')
							.slice(1)
							.join('/');

	}
	var errors = [];

	User.create(req.body);
		res.redirect('/users');
}

module.exports.detailUser = async function(req,res){
	var id = req.params.id;
	// console.log(typeof id);

	var user = await User.find({id:id});
	// console.log(user);
	res.render('user/view',{
		user: user,
		// id:id
	});

}