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


// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'Teacher';
const year = 1991


// Functions
console.log(addDecl(5,6))
// console.log(addExp(5,6))
// console.log(addArrow(5,6))

function addDecl(a,b) {
    return a + b;
}

const addExp = function(a,b) {
    return a + b;
}

var addArrow = (a,b) => a+b;

// Example

if(!numProd) deleteShoppingCart()

var numProd = 10;

function deleteShoppingCart() {
    console.log('All products deleted!')
}

var x = 1;
let y = 3;
const z = 3;
