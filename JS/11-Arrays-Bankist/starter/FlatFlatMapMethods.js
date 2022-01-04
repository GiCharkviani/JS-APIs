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

// FLAT - will remove nested arrays and returns new array
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

// if there is more than one dimension:
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // adding arg will determine dimension, depth of nesting

// EXAMPLE
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements)
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, cur) => acc + cur);
// console.log(overalBalance);



// FLATMAP - combines map and flat methods, like we used above
// Shorter  way
// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur);
console.log(overalBalance);

// flatMap
const overalBalance1 = accounts
  .flatMap(acc => acc.movements) // it only goes 1 level deep
  .reduce((acc, cur) => acc + cur);
console.log(overalBalance1);
