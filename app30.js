/**
 * embedding JS in HTML is done using template engine
 * we will be using EJS(Template Engine) to do that.
 * 
 * In this example we will be passing collection data
 * EJS template and that will be rendered by our node
 * function. 
 * 
 * We will also see how we will cycle through collection
 * data in ejs template
 * 
 * Here we are using partial templates in out EJS templates
 */

var express = require('express');

var app = express();

// tell express to set view engine as EJS
app.set('view engine', 'ejs');

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
