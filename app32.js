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
 * here we would be using an express' unbuilt middleware which is used
 * to map the static content of a web page
 * 
 * express.static(arg)
 * here arg is directory to which you want to link the static-request to
 */
app.use('/assets', express.static('assets'));

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
