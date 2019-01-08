var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

// app.get('/', function(req, res){
// 	res.send('hello express');
// });

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('about us!!!');
});

 app.use(express.static(__dirname + "\\public"));
// console.log(__dirname + "\\public");

app.listen(PORT, function(){console.log('server started! on port '+ PORT)});