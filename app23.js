/**
 * Basic Routing (bad way)
 */

var http = require('http');
var fs = require('fs');

var ip = '127.0.0.1';
var port = 3000;
var header_html = {'Content-Type': 'text/html'};
var header_json = {'Content-Type': 'application/json'};
var status = 200;
var err_status = 404;
var index = __dirname + '/index.html';
var contact = __dirname + '/contact.html';
var error_page = __dirname + '/404.html';

var server = http.createServer(function(req, res){
  console.log(`requested url: ${req.url}`);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(status, header_html);
    fs.createReadStream(index).pipe(res);
  } else if(req.url === '/contact-us'){
    res.writeHead(status, header_html);
    fs.createReadStream(contact).pipe(res);
  } else if(req.url === '/api/persons') {
    var persons = [{name: 'Aditya',age: 25},
                  {name: 'Richa', age: 24}];
    res.writeHead(status, header_json);
    res.end(JSON.stringify(persons));
  } else {
    res.writeHead(err_status, header_html);
    fs.createReadStream(error_page).pipe(res);
  }
});

server.listen(port, ip);
console.log(`listing at ${ip}:${port}`);
