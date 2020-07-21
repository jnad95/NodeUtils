/**
 * basic example for the "http" module
 */

var http = require('http')

/**
 * 1st arg takes a callback function which in turn takes 2 args,
 * request and response, respectively
 */
var server = http.createServer(function(req, res){
  //request object has an attribute `url` containting url on which request is made on.
  console.log('request was made '+ req.url);
  /**
   * writing header of response object
   * 1st arg is the port to response status code.
   * 2nd arg is the object containing more header attributes.
   */
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //closing the req and sending some data with response obj, at the same time.
  res.end('You are here');
});

//starts the server
server.listen(3000, '127.0.0.1');

console.log('you are listing to port 3000');
