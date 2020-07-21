//read and write files using node core modules

var fs = require('fs');

/**
 * read files using node core module, readFile
 * */

var filename = 'app5.js';

// async. non-blocking code. code will move forward even if this statement execution is not finished.
// 1st arg filename
// 2nd arg is character encoding
// 3rd arg is the callback function which will fire when the execution completes.
var content = fs.readFile(filename, 'utf8',
// 1st arg is the error, is any.
// 2nd arg is the data that we have read from the file. return value from
// this(readFile) function call
function(err, data){
  console.log(data);
});

// to test async behavior of above function
console.log("test");


fs.readFile(filename, 'utf8', function(err, data){
  fs.writeFile('writeMe2.txt', data, function(){
    console.log("writing to file finished");
  });
});
