var db = require('../db');

module.exports.addToCard = function(req, res){
	var productId = req.params.productId;
	var sessionId = req.signedCookies.sessionId

	if(!sessionId){
		res.redirect('/products');
		return;
	}

	sumCart = 1;
	var countCart = db
		.get('sessions')
		.find({id:sessionId})
		.get('cart')
		.value()

	for(cart in countCart){
		sumCart += countCart[cart]
	}

	// su = 1;
	// var sum = db
	// 	.get('sessions')
	// 	.find({id:sessionId})
	// 	.get('cart')
	// 	.value()

	// for(s in sum){
	// 	su += sum[s]
	// }

	var conut = db
		.get('sessions')
		.find({id:sessionId})
		.get('cart.' + productId, 0)
		.value();

	db.get('sessions')
	.find({id:sessionId})
	.set('cart.' + productId, conut + 1)
	.write()

	res.redirect('/products')

};