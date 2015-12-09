//setup express
var express = require('express'),
	app = express();

//set up routes
var routeAuth = require('./routes/auth');
var routeProfile = require('./routes/profile');
var routeItem = require('./routes/item');

//setup http parser structure and filesystem
var bodyParser = require('body-parser'),
	jsonParser = bodyParser.json();

app.use(express.static('../app')); // setup static directory
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routeAuth);
app.use('/profile', routeProfile);
app.use('/item', routeItem);

// start the server
var server = app.listen(3000, function() {
console.log("Started on port 3000");
var host = server.address().address;
var port = server.address().port;

});
