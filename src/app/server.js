var config = require('./config');
var express = require('express');
var mongoose = require('mongoose');
var app = express();

// serve static files from ./public
app.use(express.static(__dirname + '/public'));

mongoose.connect(config.mongo.url);
mongoose.connection.once('open', function() {
  console.log("Connected to db at " + config.mongo.url);
});
// start server
app.listen(config.express.port, '0.0.0.0', function() {
  console.log('Server started on port ' + config.express.port + '.')
});
