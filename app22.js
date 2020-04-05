var http = require('http');

var ip = '127.0.0.1';
var port = 3000;
var status = 200;
var header = {'Content-Type': 'application/json'};
var obj = {
  name: 'Aditya',
  job: 'Developer',
  age: 25
};

var server = http.createServer(function(req, res){
  console.log(`requested url: ${req.url}`);
  res.writeHead(status, header);
  // res obj expects either a string or a buffer.
  // hence this is wrong -> res.end(obj);
  // obj is an object and needs to be converted to a string.
  // and therefore we need to serealize it.
  res.end(JSON.stringify(obj));
});

server.listen(port, ip);

console.log(`listening to ${ip}:${port}`);
