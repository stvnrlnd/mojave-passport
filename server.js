'use strict';
// ------ Require packages
var express = require('express');

// ------ Configure application
var app     = express();
var port    = process.env.PORT || 3000;

// ------ Build routes
app.get('/', function(req, res) {
  res.send("Hello, beautiful!");
});

// ------ Serve
app.listen(port, function() {
  console.log("Running on port " + port);
});
