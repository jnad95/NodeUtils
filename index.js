var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var mongo_conn_url = 'mongodb+srv://adityaja:Guava.rar1928@cluster0-exqwg.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongo_conn_url);

// create a new schema - which is like a blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

/** create a new model and base it on a Schema.
 * mongoose.model 1st args is the "Model" name in mongoDB and
 * 2nd arg is schema on which model is based on.
 */
var Todo = mongoose.model('Todo', todoSchema);

// create an instance of the Todo model
var itemOne = Todo({item: 'buy flowers'}).save(function(err){
  if(err) throw err;
  console.log('item saved');
});
