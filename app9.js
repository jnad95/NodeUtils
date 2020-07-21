/**
 * Event Module
 */ 

/**
 * Core Module can be refferenced by just their naming it require function,
 * absolute path in not required
 */
var events = require('events');

var myEmitter = new events.EventEmitter();

/**
 * 1st arg in the name of the events
 * 2nd arg is the callback function
 */
myEmitter.on('someEvent', function(message){
  console.log(message);
});

/**
 * 1st args in the event we want to emit
 * 2nd args is the args for the callback function.
 */
myEmitter.emit('someEvent', 'The event was emitted');
