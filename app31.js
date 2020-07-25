/**
 * exmaple of a middleware
 * 
 * any code that comes in between request and response in called middleware
 * for eg, our routing parameter code blocks are essentially middleware blocks
 */

var express = require('express');

var app = express();

// tell express to set view engine as EJS
app.set('view engine', 'ejs');

/**
 * This is middleware that will come into picture whenever there is a request
 * for "/assets"
 * 
 * next is use to invoke the next middleware that should execute in the mentioned
 * route(here "/assets")
 */
app.use('/assets', function(req, res, next){
  console.log(req.url);
  next();
});

/**
 * EJS default behaviour is to look at `./views` folder for views.
 * ejs views are stored with extenstion `.ejs`
 */

var port = 3000;

app.get('/', function(req, res){
  /**
   * we are not required to pass the whole filename, ie, `index.ejs`
   * only filename without suffix is enough.
   */
  res.render('index');
});

app.get('/contact', function(req, res){
  res.render('contact');
});

app.get('/profile/:name', function(req, res){
  /**
   * render function is used to render a view from `/views` folder directory.
   * 1st arg, is filename from `/views` folder.
   * 2nd arg, is data obj passed to profile view.
   * it is a mechanism to pass data to a view.
   * it can be used in the profile view with name person.
   */
  var data = {age: 25, job: 'coder', hobbies: ['coding', 'reading', 'testing']}
  res.render('profile3', {person: req.params.name, data: data});
});

app.listen(port);
