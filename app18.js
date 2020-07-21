/**
 * reading file as a stream using "fs" module
 * readStream function from "fs" module is used
 * writeStream function from the "fs" module is used
 * readSteam's "on" events usage 
 * Here in this example content is written to writeStream based on the 
 * "receive" events from readStream.
 * */ 

var fs = require('fs');

source_filename = __dirname + '/readMe.txt';
charset = 'utf8';
var readStream = fs.createReadStream(source_filename, charset);

dest_filename = __dirname + '/writeMe.txt';
/** 
 * write stream can write data to another stream
*/
var writeStream = fs.createWriteStream(dest_filename);

readStream.on('data', function(chunk){
  console.log("new check received");
  writeStream.write(chunk);
});
