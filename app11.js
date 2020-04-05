//read and write files using node core modules

var fs = require('fs');

var filename = 'app5.js';

// blocking code. code will not move forward unless this statement executing finishes.
// 1st arg filename
// 2nd arg is character encoding
var content = fs.readFileSync(filename, 'utf8');

console.log(content);
