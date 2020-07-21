/**
 * passing function to another function
 * */

function callFunction(fun) {
  fun();
};

sayBye = function(){
  console.log('Bye');
};

callFunction(sayBye);
