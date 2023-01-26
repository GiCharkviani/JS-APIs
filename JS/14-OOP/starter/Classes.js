/* Classes */

// class expression - it's because classes are functions as well
// const PersonCl = class {}

// class declaration
class personCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // these methods will be on .prototype and not on object itself
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new personCl('Jessica', 1996);
console.log(jessica)
jessica.calcAge()

console.log(jessica.__proto__ === personCl.prototype)

// method can be added from prototype as well
personCl.prototype.greet = function() {
  console.log(`Hey ${this.firstName}`)
}

jessica.greet()

// 1. Classes are NOT hoisted (can't be used before declaration)
// 2. Classes are first-class citizens - we can pass them to functions and return from functions as they are also special kind of functions behind the scenes
// 3. Classes are executed in strict mode (even not using in the head)

