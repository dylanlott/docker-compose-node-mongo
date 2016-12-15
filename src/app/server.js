var config = require('./config');
var express = require('express');
var mongoose = require('mongoose');
var app = express();

// serve static files from ./public
app.use(express.static(__dirname + '/public'));

//Database Connection

mongoose.connect("mongodb://mongo:27017/");
mongoose.connection.once('open', function() {
  console.log("Connected to db at " + mongoUri);
});
// start server
app.listen(config.express.port, '0.0.0.0', function() {
  console.log('Server started on port ' + config.express.port + '.')
});
