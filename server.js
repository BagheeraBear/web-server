var express = require('express');
var app = express();
var PORT = 3000;
var middleware = require('./middleware.js');

app.use(middleware.logger);

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

