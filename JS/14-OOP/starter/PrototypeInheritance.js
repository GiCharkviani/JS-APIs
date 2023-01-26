/* Prototype Inheritance*/

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person('Jonas', 1994);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.species = 'Homo Sapiens';

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); // Prorortype property on Object - that is the on the top of scope chain
console.log(jonas.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor); // proto of constructor func

const arr = [1, 3, 32, 1, 54, 3, 3, 1, 1, 65, 65, 465, 456]; // [] === new Array
console.log(arr.__proto__);
console.log(arr.__proto__ == Array.prototype); // because it's created by array constructor function

console.log(arr.__proto__.__proto__); // again Object prototype

// all the funcs of array already exists in JS (in prototype property), and because of prototype inheritance, they can get access to them

// Adding new method on prototype
Array.prototype.unique = function () {
  return [...new Set(this)]; // this will be a array that this function will be called on (as the rule of this keyword says - it will applay on that object that will call this function).
};

// calling my created function
// but not a good idea
console.log(arr.unique());

const h1 = document.querySelector('h1');

// if i want actual object of DOM element:
console.dir(h1)

// the same happens with prototype chain in DOM elements
console.dir(x => x + 1) // function is also object, so it has it's own prototype