/* INHERITANCE BETWEEN CLASSES: Object.create() */
// When we use Object.create() we don't fake classes, but simply linking objects together

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // will attach PersonProto as it's prototype

const StudentProto = Object.create(PersonProto);
// applying static method on StudentProto to behave like constructor function
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

// will inherit from StudentProto that inherits from PersonProto

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
console.log(jay);
jay.init('Jay', 2021, 'Computer Science');
jay.introduce()
jay.calcAge()