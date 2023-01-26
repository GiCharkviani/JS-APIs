/* INHERITANCE BETWEEN CLASSES: CONSTRUCTOR FUNCTIONS */

// Constructor function

// Person (Parent)
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Student (child)
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // inheritance - calling and attaching this keyword to parent function and passing arguments
  this.course = course;
};

// Object create -- it should be here
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Compuer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

// because prototypes are linked together
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student; // fixing
console.dir(Student.prototype.constructor);
