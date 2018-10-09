var express = require('express')
var app = express()
var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

var users = [
	{id:1, name: 'Tuan'},
	{id:2, name: 'Nguyễn'},
]

app.get('/',function(req,res){
	res.render('index',{
		users:  users
	});
});

app.get('/users',function(req,res){
	res.render('users',{
		users: users
	});
});

app.get('/users/search',function(req,res ) {
	var q = req.query.q;
	var matchedUser = users.filter(function(user){
		return user.name.indexOf(q) !== -1;
	});
	res.render('user/index',{
		users:matchedUser
	});
});


app.get('/tuan',function(req,res){
	res.send('<h1> TUANA</h1>')
})

app.listen(port,function(){
	console.log('Server listening on post ' + port)
})