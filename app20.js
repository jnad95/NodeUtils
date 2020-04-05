var http  = require('http');
var fs  = require('fs');

var source_filename = __dirname + '/readMe.txt';
var charset = 'utf8';
var dest_filename = __dirname + '/writeMe.txt';
var success_status_code = 200
var res_header = {'Content-Type': 'text/plain'};
var port = 3000;
var ip = "127.0.0.1";

var server = http.createServer(function(req, res){
  console.log("Requested Url: " + req.url);

  res.writeHead(success_status_code, res_header);

  var readStream = fs.createReadStream(source_filename, charset);

  // we are piping the read stream with res obj which also a writable stream.
  readStream.pipe(res);
});


server.listen(port, ip);

console.log(`listing on ${ip}:${port}`);
