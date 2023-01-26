'use strict';
/* Prototype */ 
// each and every function automaticly has property - Prototype
// that includes also constructor functions
// constructor functions get access on prototype property, where is object with constructor function
// everything declared in Prototype property will be accessable for all functions, that will call Prototype property, as it will be saved there 

const Person = function(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
}

// The best wat adding methods into Constructor Funtion Object
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear)
}
console.log(Person.prototype)

// getting access on methods
const jonas = new Person('Jonas', 1994)
const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)

// all Objects that are instances of Person constructor function, will have  the same method as declared in the Person's Prototype's property
// if we declared in Function Constructor a method, like a property, only then method will be attached (copied) into the object instances
// it works so because every object (instance) always has access to it's prototype
jonas.calcAge()
matilda.calcAge()
jack.calcAge()

// checking:
console.log(jonas.__proto__ == Person.prototype) // Prototype of Jonas (where it has access from and to - all methods declared in prototype)

// Prototype in general is not particularly only for Person constructor object, but also for all the instances that will be made from this constructor func.

console.log(Person.prototype.isPrototypeOf(jonas)) // one more check that prototype is shared between constructor function and its instances

// Object (Instance) itself won't contain the method, but the prototype
console.log(jonas)
console.log(matilda)
console.log(jack)

// We can also set properties on Prototype
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species) // they will inherit, get access to this property (like a method) from prototype
// But they won't be own properties
// we can check that:
console.log(jonas.hasOwnProperty('firstName'))
console.log(jonas.hasOwnProperty('species'))