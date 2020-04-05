// printing statement after every 2 seconds.

var time = 0;

setInterval(function(){
  time+=2;
  console.log(time+' seconds have passed');
}, 2000)
