// Require dependencies
var express = require("express");
var bodyParser = require("body-parser");


// Set our port to 8080 and Express App
var app = express();


var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


//ROUTER//

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




// Starts our server.
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT)
});

