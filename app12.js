//read and write files using node core modules

var fs = require('fs');

var filename = 'app5.js';

// blocking code. code will not move forward unless this statement executing finishes.
// 1st arg filename
// 2nd arg is character encoding
var content = fs.readFileSync(filename, 'utf8');

// 1st arg is the destination filename.
// 2nd arg is the data source. String here.
fs.writeFileSync("writeMe.txt", content)
