/** 
 * in this example we will talk about the
 * one of the most famous NodeJs Framework
 * "express"
*/

// importing express
var express = require('express');

// setting an express app, which is having all the functionalities backed into it.
var app = express();

var port = 3000;

/**
 * While using express we don't need to specify the `content-type` in header explicitly.
 * express is smart enough to detect it, automatically.
*/

/**
 * 1st arg is the route
 * 2nd callback function
 * when user goes to '/' address callback function is fired.
 */
app.get('/', function(req, res){
  res.send('this is the homepage');
});

app.get('/contact', function(req, res){
  res.send('this is a contact page');
});

// app listing to port 3000
app.listen(port);

/**
 * HTTP Methods
 *    - GET
 *    - POST
 *    - DELTE
 *    - PUT
*/

/**
 * GET - app.get('route', fn);
 * POST - app.post('route', fn);
 * DELETE - app.delete('route', fn);
*/
