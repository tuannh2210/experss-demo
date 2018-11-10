var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var productSchema = new Schema({
	name: String,
	image: String,
	description : String

})

var Product = mongoose.model('Product', productSchema, 'products');
             //mognose.model('nameModel', nameSchema,'nameCollection') 

module.exports = Product;