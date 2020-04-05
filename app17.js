var fs = require('fs');

// create a readable readStream
// 1st arg filename from where to read
// character encoding
var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

// createReadStream has a 'data' event which is fired when a chunk of data is
// received from stream.
readStream.on('data', function(chuck){
  console.log('new chunk received');
  console.log(chuck);
});
