/*
embedding JS in HTML is done using template engine
we will be using EJS(Template Engine) to do that.
*/

var express = require('express');

var app = express();

// tell express to set view engine as EJS
app.set('view engine', 'ejs');

// EJS default behaviour is to look at `./views` folder for views.
// ejs views are stored with extenstion `.ejs`

var port = 3000;

app.get('/', function(req, res){
  // we are not required to pass the whole filename, ie, `index.ejs`
  // only filename without suffix is enough.
  res.render('index');
});

app.get('/contact', function(req, res){
  res.render('contact');
});

app.get('/profile/:name', function(req, res){
  // render function is used to render a view from `/views` folder directory.
  // 1st arg, is filename from `/views` folder.
  // 2nd arg, is data obj passed to profile view.
  // it is a mechanism to pass data to a view.
  // it can be used in the profile view with name person.
  res.render('profile', {person: req.params.name});
});

app.listen(port);
