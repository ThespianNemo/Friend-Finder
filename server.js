var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
//var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// =============================================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//app.get('/', function(req,res){
 // res.send('hello');
//});

// Starts the server to begin listening
// =============================================================
var port = process.env.PORT || 3000;
app.listen(port);

