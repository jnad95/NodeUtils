var http = require('http');
var fs = require('fs');

var ip = "127.0.0.1";
var port = 3000;
var success_status = 200;
var header = {"Content-Type": "text/html"};
var source_filename = __dirname + '/index.html';
var charset = 'utf8';

var server = http.createServer(function(req, res){
  console.log(`request is made on url: ${req.url}`);

  res.writeHead(success_status, header);
  var readStream = fs.createReadStream(source_filename, charset);
  readStream.pipe(res);
});

server.listen(port, ip);

console.log(`We are listing to, ${ip}:${port}`);
