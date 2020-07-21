/**
 * up until now we were sending the some text in the response
 * in this example we will be sending an HTML file instead
 */


var express = require('express');
var app = express()

var port = 3000;
var index = __dirname + '/index.html';
var contact = __dirname + '/contact.html';

app.get('/', function(req, res){
  //send File is used to serve a file for a http get request here.
  res.sendFile(index);
});

app.get('/contact', function(req, res){
  res.sendFile(contact);
});

app.get('/profile/:name', function(req, res){
  res.send('you are viewing the profile of user: ' + req.params.name);
});

app.listen(port);
