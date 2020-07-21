/**
 * inheritance exmaple
 * Practical application for events module
 */ 

var events = require('events');
var util = require('util'); // let us inherit another obj

var Person = function(name) {
  this.name = name;
};

/**
 * 1 arg is class which want to inherit another class. AKA child class
 * 2 arg is the class from which we want to inherit from. AKA Parent class
 */
util.inherits(Person, events.EventEmitter);

var adityaja = new Person('adityaja');
var jitendra = new Person('jitendra');
var annajose = new Person('annajose');

Persons = [adityaja, jitendra, annajose]

Persons.forEach(function(person){
  person.on('speak', function(message){
    console.log(person.name + ' said: ' + message);
  });
});

adityaja.emit('speak', 'We all are awesome!');
jitendra.emit('speak', 'I am poor with jokes!');
