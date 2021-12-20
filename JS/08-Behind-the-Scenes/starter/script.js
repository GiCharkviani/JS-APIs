'use strict';

// function calcAge(bithYear) {
//   const age = 2037 - bithYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${bithYear}`;
//     console.log(output);

//     if (bithYear >= 1981 && bithYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT';

//       const str = `oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//           return a+b
//       }
//     }
//     // console.log(str)
//     console.log(millenial);
//     // add(2,3)
//     console.log(output)
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1994);
// // console.log(age)
// // printAge()

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'Teacher';
// const year = 1991

// // Functions
// console.log(addDecl(5,6))
// // console.log(addExp(5,6))
// // console.log(addArrow(5,6))

// function addDecl(a,b) {
//     return a + b;
// }

// const addExp = function(a,b) {
//     return a + b;
// }

// var addArrow = (a,b) => a+b;

// // Example

// if(!numProd) deleteShoppingCart()

// var numProd = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted!')
// }

// var x = 1;
// let y = 3;
// const z = 3;

// // this keyword
// console.log(this);
// const calcAge = function (birthyear) {
//   console.log(2037 - birthyear);
// //   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthyear => {
//   console.log(2037 - birthyear);
// //   console.log(this);
// };
// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year)
//   },
// };
// jonas.calcAge();

// const matilda = {
//     year: 2017,
// }

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// // f();

// Regular VS Arrow Funtions

// var firstName = 'Matlida'; // because it's var and registrates in global window

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     const self = this; // option to store this - called self or that, or instead arrow function to use

//     const isMillenial = function() {
//         console.log(self)
//         console.log(self.year >= 1981 && self.year <= 1996)
//         // console.log(this.year >= 1981 && this.year <= 1996) // won't work as it doesn't have access to parent by this keyword
//     };
//     isMillenial()
//   },

//   greet: () => {
//     console.log(this); // global
//     console.log(`Hey ${this.firstName}`); // this - doesn't work in arrow func, because its parent scope is global scope, as there is not "firstName"
//   },
// };
// jonas.greet();
// console.log(this);
// jonas.calcAge();

// const addExp = function(a,b) {
//     console.log(arguments)
//     return a + b;
// }
// addExp(2, 5);
// addExp(2, 5, 5, 1, 2, 3);

// var addArrow = (a,b) => {
//     // console.log(arguments) // won't work as this keyword
//     return a+b
// };
// addArrow(5,1);


// Primitives VS Objects
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'ComputerX',
//     age: 30
// }
// const friend = me;
// friend.age = 27;
// console.log('Friend: ', friend);
// console.log('Me: ', me);

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davids';
// console.log(lastName, oldLastName)

var david = 'David'
let david1 = 'David'
const david2 = 'David'