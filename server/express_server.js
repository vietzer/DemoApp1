var express = require("express"),
    http = require("http"),
    app = express();
 
// Folgende Zeile ausklammern, dann gilt für / route ganz unten.
app.use(express.static(__dirname + "/../client"));
     
http.createServer(app).listen(3000);
 
// Route
app.get("/hello", function(req, res) {
  res.send("Hello World");
});
app.get("/goodby", function(req, res) {
  res.send("Goodby World");
});
app.get("/", function(req, res) {
  res.send("This is the root route!");
});