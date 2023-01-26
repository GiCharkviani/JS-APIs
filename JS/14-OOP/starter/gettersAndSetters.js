/* SETTERS AND GETTERS */

// they are accessor properties, while others are data properties

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  }, // they should be separated by comma as they are properties as well
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

// setters work like property and have to be assigned
account.latest = 50;

console.log(account.movements);

// The same works for Classes as well:
// class declaration
class personCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // these methods will be on .prototype and not on object itself
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  // not needed to use commas as we don't declare properties in class as in object literals
  // they will also be in prototype as well as a property and as a methods too.
  get age() {
    return 2037 - this.birthYear;
  }

  // every time as fullName is executed - entered in constructor - setter fullName will also be executed and 'name' parameter will became the one. (because they have the same names)
  set fullName(name) {
    console.log(name);
    // _ by the convention, to not to happen stack overflow, as both, constructor and setter are trying to set the same property, we have to use different peoperty for assigning.
    // after this, fullName will be - _fullName
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name!`);
  }
  get fullName() {
    // this just for this to have fullName again, but both will be registrated stll
    return this._fullName;
  }
}

const jessica = new personCl('Jessica Davis', 1996);
console.log(jessica.age);
console.log(jessica);

// ... in console means, it's calculated when we click there.

// testing setters work
const walter = new personCl('Walter', 1965); // will log else case
console.log(walter);
