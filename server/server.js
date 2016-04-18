var http = require("http"),
    server;
     
server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hallo Welt");
});
 
server.listen(4000);
 
console.log('Server listening on port 4000');