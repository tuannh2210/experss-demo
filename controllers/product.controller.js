var Product = require('../models/product.model')

// var shortid = require('shortid');

module.exports.index = async function(req, res, next){
	// var page = (req.query.page) || 1 ; //n
	// var perPage = 8; //x

	// var start = (page - 1) * perPage;
	// var end = page * perPage

	// var count = db.get("products").value().length
	// // console.log(page)
	// res.render('product/index', {
	// 	products: db.get('products').value().slice(start,end),
	// 	// products: db.get("products").drop(start).take(perPage).value(), // use lodash
	// 	current : page,
	// 	pages: Math.ceil(count/perPage)
	// });
	try{

		var products = await Product.find();
		res.render('product/index', {
		 	products: products

		 });
	} catch(error){
		next(error);
	}
	// try cach: bắt lỗi trong express

	// res.send(page)
}