/**
 * we can skip using evening and directly pipe output from one 
 * readable stream to another writable stream
 */

/**
 * example of PIPE in stream
 * reading from one stream and writing to another stream
 */ 

var fs = require('fs')

source_filename = __dirname + '/readMe.txt';
dest_filename = __dirname + '/writeMe.txt';
charset = 'utf8'

var readStream = fs.createReadStream(source_filename, charset);
var writeStream = fs.createWriteStream(dest_filename);

/**
 * pipe can only be used on readable stream.
 * we are piping the read stream to write stream.
 */ 
readStream.pipe(writeStream);
