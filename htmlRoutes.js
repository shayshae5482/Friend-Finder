// Dependencies
// ===========================================================
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = 8080;

//Get the Express app to breakdown the json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Data
// ===========================================================
// var yoda = {
//     name: "Yoda",
//     role: "Jedi Master",
//     age: 900,
//     forcePoints: 2000
//   };
  
//   var darthmaul = {
//     name: "Darth Maul",
//     role: "Sith Lord",
//     age: 200,
//     forcePoints: 1200
//   };
///
//==============================================================


// Routes
// ===========================================================
app.get("/home", function(req, res) {
    res.send("Welcome to Friend Finder!");
  });
  
  app.get("/survey", function(req, res) {
    res.json(data);
  });
  
  // Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  