var fs = require('fs');

// following are the blocking calls
// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

// following are the non-blocking calls
/*
fs.mkdir('stuff', function(){
  fs.readFile('app5.js', 'utf8', function(err, data){
    fs.writeFile('./stuff/writeMe.txt', data, function(){
      console.log('writing to file finished');
    });
  });
});
*/



fs.unlink('./stuff/writeMe.txt', function(){
  console.log('file removed');
})

fs.rmdir('stuff', function(err){
  console.log('directory removed');
});
