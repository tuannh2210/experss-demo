var express = require('express')
var app = express()
var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/',function(req,res){
	res.render('index',{
		users:[
			{id:1, name: 'Tuan'},
			{id:1, name: 'Tuan'},
			{id: 2 , name:'Agiih'}
		]
	});
});

app.get('/tuan',function(req,res){
	res.send('<h1> TUANA</h1>')
})

app.listen(port,function(){
	console.log('Server listening on post ' + port)
})