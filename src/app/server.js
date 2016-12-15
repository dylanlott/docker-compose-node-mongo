var config = require('./config');
var express = require('express');
var mongoose = require('mongoose');
var app = express();

// serve static files from ./public
app.use(express.static(__dirname + '/public'));

//Database Connection - Set a fallback URL for local mongo
var mongoUri = process.env.MONGO_URL || "localhost:27017/exampleapp";  

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log("Connected to db at " + mongoUri);
});
// start server
app.listen(config.express.port, '0.0.0.0', function() {
  console.log('Server started on port ' + config.express.port + '.')
});
