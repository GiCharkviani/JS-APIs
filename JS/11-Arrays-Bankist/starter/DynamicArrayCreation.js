'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const currencies = new Map([
  ['USD', 'United States dollar'], // each is entry, where first is key, the second is value
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*Literally creating arrays*/
const arr = [1,2,3,4,5,6,7,8,9];
// Constructor creation
console.log(new Array([1,2,3,4,5,6,7,8,9]))

/*PROGRAMATICLY*/

// Empty arrays + fill method
const x = new Array(7) // will create new arr with 7 empty elements
console.log(x)
console.log(x.map(() => 5)) // nothing happens
// FILL Method - we can use on empty array
// x.fill(1) // will mutate array
x.fill(1, 3, 5) // will fill only some slots
console.log(x)
// we can also fill existing array
arr.fill(23, 4, 6) // will mutate original
console.log(arr)

// Array.from
const y = Array.from({length: 7}, () => 1) // is calling static method on array
// first arg - config ob, sec arg - callback func with element
// callback function will be called on each element and can replace that item
console.log(y)

const z = Array.from({length: 7}, (_ /*will be empty*/, i) => i+1) // cur (_) - current element, i - current index
console.log(z)

// task
const random = Array.from({length: 100}, () => Math.trunc(Math.random()*100))
console.log(random)

// DOM from NodeList into Array (using Array.from)
const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => el.textContent.replace('€','')) 
// might be used so as well, querySelectorAll will get NodeList and Array.from() will turn it into Array, so as a result, we will have references array of DOM Elements, also right inside we can Map
// so it shows that we can manipulate DOM using references array as we have made above
console.log(movementsUI);


// other way to convert NodeList into Array:
const movementsUI2 = [...document.querySelectorAll('.movements__value')]
console.log(movementsUI2) // have to do Map separately