//creating and removing directories

var fs = require('fs');

// to delete the file we use `unlink` funtcion from `fs` module
fs.unlink('writeMe2.txt', function(){
  console.log('file deleted');
})
