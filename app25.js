/**
 * dynamic routing, route params
 */

//import express
var express = require('express');

//initialise express
var app = express()

var port = 3000;

/**
 * 1st arg is the route
 * 2nd arg is the callback function
 */
app.get('/',function(req, res){
  res.send('you are at home page');
});

app.get('/contact', function(req, res){
  res.send('you at contact page');
});

/**
 * parameterized routing or route params.
 * here `id` is the route parameter which is specified by prefxing a `:`(colon) 
 * before the param. This param could be access by `req` obj like -> `req.params.id`
 */
app.get('/profile/:id', function(req, res){
  res.send('you requested to see a profile with id of ' + req.params.id);
});

// listen to port 3000
app.listen(port);
