/**
 * removing files using "fs" module
 * */

var fs = require('fs');

// to delete the file we use `unlink` function from `fs` module
fs.unlink('writeMe2.txt', function(){
  console.log('file deleted');
})
