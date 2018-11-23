// Require dependencies
var http = require("http");
var fs = require("fs");
var path = require("path");

// Set our port to 8080 and Express App

var PORT = 8080;






var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // When we visit different urls, read and respond with different files
  switch (path) {

    case"/":
    case "/home":
      return fs.readFile(__dirname + "/home.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    case "/survey":
      return fs.readFile(__dirname + "/survey.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  
    } 
  }
;



// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT)}
);

