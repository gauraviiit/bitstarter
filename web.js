var express = require('express');
var buf = require('buffer');
var fs = require('fs');

var buf = new Buffer(20000);


var app = express.createServer(express.logger());

buf = fs.readFileSync('index.html','utf8');

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
