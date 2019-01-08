var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route  hit!');
		next();
	},
	logger: function(req, res, next){
		console.log(req.method + ' ' + req.originalUrl);
		console.log("date " + new Date().toString());
		next();
	}
};

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