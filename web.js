var express = require('express');
var fs      = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var index_html = fs.readFileSync("index.html");
    
    response.send(index_html.toString("utf-8"));
});
  
  
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});
