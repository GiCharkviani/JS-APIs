'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE - non-mutating original array, copying
console.log(arr.slice(2))
console.log(arr.slice(2, 4))
console.log(arr.slice(-2))
console.log(arr.slice(-1))
console.log(arr.slice(1,-2))
console.log(arr.slice())
console.log([...arr]) // the same as above

// SPLICE - mutating original array,
// console.log(arr.splice(2))
arr.splice(-1)
console.log(arr)
arr.splice(1, 2) // b and c are deleted
console.log(arr) // elements were extracted from original arr

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()) // reverses array - it mutates original
console.log(arr2) // original mutates

// CONCAT
const letters = arr.concat(arr2) // will be concated, doesn't mutate original
console.log(letters)
console.log([...arr, ...arr2]) // the same as above

// JOIN
console.log(letters.join('-')) // joins and returns string with separator

// AT
const arr_test = [23, 11, 64];
console.log(arr_test[0]) // traditional
console.log(arr_test.at(0)) // new
// getting last array element
console.log(arr_test[arr_test.length - 1]) // traditional - just quick
console.log(arr_test.slice(-1)[0]) // traditional
console.log(arr_test.at(-1))  // new - also good with method chaining or starting counting from the last element

// by the way - at in string
console.log('Giorgi'.at(0))
console.log('Giorgi'.at(-1))