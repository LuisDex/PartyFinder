//Initiates the dependencies for the server to run
var express = require("express");
var path = require("path");

//Sets up a default Port to be used and the option to use an empty port in case the default one is in use
var app = express();
var PORT = process.env.PORT || 3000;

//Instructs the server to use the middleware to properly render the data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Allows the Node.js server to properly display static content such as images and the css
app.use(express.static("app/public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Initiates the server to listen for requests from the desired PORT
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });