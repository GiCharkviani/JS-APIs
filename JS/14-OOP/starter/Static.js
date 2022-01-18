/* STATIC METHODS */
// example of static method is Array.from() for example
// they are attached on entire constructor, but not to the prototype property to the constructor, hence they don't inherit these methods

// they are also called - in the namespace of smth

// in Constructor Functions:
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.hey = function () {
  console.log('Hey there 😍');
  console.log(this); // entire constructor functio
};
Person.hey();
const jonas = new Person('Jonas', 1994);
// jonas.hey() // won't be here

// in Classes:

class personCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Static method.
  static hey() {
    console.log('Hey there 😍');
    console.log(this); // points to entire class
  }
  // Instance method
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
const jessica = new personCl('Jessica', 1996);
personCl.hey()