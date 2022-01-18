/* INHERITANCE BETWEEN CLASSES: CLASSES */

// Parent class
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there 🧠');
  }
}

// Child class
// will do the same as constructor function inheritance, just behind the scenes
class Student extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always need to happen first!
    super(fullName, birthYear); // this is the constructor function of Parent Class
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  // will rewrite on Parent's method, because this method in Prototype chain will appear earlier than Parent's method
  // in other words, it's shadowing what is in parent class
  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new Student('Martha Gaga', 2002, 'qartvelebis mtyvneli');
martha.calcAge();
martha.introduce();
