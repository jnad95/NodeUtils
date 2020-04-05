var counter = function(arr){
  return `there are ${arr.length} elements in the array.`
}

var adder = function(a, b) {
// template string begins with (`) and variables can be embbed to it.
  return `the sum of the 2 numbers is ${a+b}`;
};

var pi = 3.14;

// this `module.exports` is just an empty object
// we can add properties to this object
/*
1st way of exporting
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
*/

/* side note: the following is called the object notation. */
a = {
  b:1,
  c:2,
  d:3
}

/* 2nd way of exporting */
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
