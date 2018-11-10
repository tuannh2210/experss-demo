 // req.query
require('dotenv').config()
var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var csrf = require('csurf')
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)

var userRoute = require('./routes/user.route')
var authRoute = require('./routes/auth.route')
var productRoute = require('./routes/product.route')
var cartRoute = require('./routes/cart.route')


var authMiddlewares = require('./middlewares/auth.middleware') 
var sessionMiddlewares = require('./middlewares/session.middleware') 

var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET)); 
app.use(sessionMiddlewares); 
// app.use(csrf({cookie:true}));
// Router
app.use('/users',authMiddlewares.requiredAuth ,userRoute);
app.use('/products',productRoute);
app.use('/cart', cartRoute);
// use public
app.use('/',authRoute)
app.use(express.static('public'))

app.get('/', function(req, res) {
	res.render('index', {
		name: 'AAA'
		});
}); 

app.listen(port, function() {
	console.log('Server listening on port ' + port);
});
