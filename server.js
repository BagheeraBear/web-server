var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function(req, res, next){
	console.log('Private route hit!');
	next();	
	},
	logger: function(req,res,next){

		// new Date().toString()
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);
//Specify up top
//app.use(middleware.requireAuthentication);

// app.get('/', function(req, res){
// 	res.send('Hello Express!')
// });

//Routes
app.get('/about', middleware.requireAuthentication, function(req,res){
	res.send('About us!');
});

//entire path
app.use(express.static(__dirname + '/public'));
//console.log('Hej');
//console.log(path.dirname());



app.listen(PORT, function(){
	console.log('Express server started ok '+ ' on port: ' + PORT );
});

