var fs = require('fs')

source_filename = __dirname + '/readMe.txt';
dest_filename = __dirname + '/writeMe.txt';
charset = 'utf8'

var readStream = fs.createReadStream(source_filename, charset);
var writeStream = fs.createWriteStream(dest_filename);

// pipe can only be used on readable stream.
// we are piping the read stream to write stream.
readStream.pipe(writeStream);
