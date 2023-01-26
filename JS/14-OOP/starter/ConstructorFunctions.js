'use strict';
/* Constructor Function */ 
// because of JS Prototype approach, we don't create classes, but objects from constructor functions
// arrow func won't work as a constructor function, because it doesn't have 'this' keyword 
const Person = function(firstName, birthYear) {
    // setting properties and methods in Object
    // names are up to us
    // it's just convention

    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Instance Method
    // but not recomended to create methods so becuase all instances will have this methods copied
    // instead of this, we will use Prototype Inheritance
    this.calcAge = function(){
        console.log(2037 - this.birthYear)
    }
}

// difference between usual and constructor functions are, with constructor function we use - 'new' keyword
// new keyword also creates new instance of it's blueprint - written in the block of function constructor (Person)

const jonas = new Person('Jonas', 1991)
console.log(jonas)
/*
When we call function with 'new' keyword:
1. New {} is created
2. function is called, this = {}
3. {} linked to prototype
4. function automatically returns {} (or with set of properties)
*/

const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)
console.log(matilda)
console.log(jack)

// instanceof - testing if instance is instance of Constructor Function
console.log(jonas instanceof Person)
