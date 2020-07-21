/**
 * example for setInterval
*/


var time = 0;

// setInterval is one if the inbuilt functions use to perform
// a certain activity in given interval of time.
var timer = setInterval(function() {
  time+=2;
  console.log(time + " seconds have passed");
  if( time > 5) {
    // clearInterval is used to clear the current Interval instance.
    clearInterval(timer);
  }
}, 2000)
