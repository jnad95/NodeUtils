/**
 * exmaple of body-parser
 */

var express = require('express');

/** 
 * https://www.npmjs.com/package/body-parser
 */
var bodyParser = require('body-parser')

var app = express();

// tell express to set view engine as EJS
app.set('view engine', 'ejs');

// middleware
app.use('/assets', express.static('assets'));

// body parser
// middleware
// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })
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
    // we can access the query params using "req" object's "query" property
    console.log(req.query)

    // we can also pass the query params in the response as an object
    res.render('contact2', {qs: req.query});
});

// we pass 2nd arg as the body-parser middleware -> urlencodedParser
// urlencodedParser middleware thus enable us to use req object to get
// the post request data.
// like -> req.body
app.post('/contact', urlencodedParser, function(req, res){
    // we can access the post req data by using "req" object's "body" property
    console.log(req.body)

    // we can also pass the query params in the response as an object
    res.render('contact3', {qs: req.query});
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
