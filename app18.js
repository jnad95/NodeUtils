var fs = require('fs');

source_filename = __dirname + '/readMe.txt';
charset = 'utf8';
var readStream = fs.createReadStream(source_filename, charset);

dest_filename = __dirname + '/writeMe.txt';
// write stream can write data to another stream.
var writeStream = fs.createWriteStream(dest_filename);

readStream.on('data', function(chunk){
  console.log("new check received");
  writeStream.write(chunk);
});
