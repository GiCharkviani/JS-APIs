/* OBJECT CREATE */
// it works different way than others
// here are neither constructor functions, nor new keywords, and nor prototype property

// this object will be prototype of all Person objects
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // for setting properties
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
// this will link a new object with PersonProto and that Person Proto will be this project's prototype
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);

//
console.log(steven.__proto__ === PersonProto); // exactly PersonProto object

// better way to set properties
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
console.log(sarah);