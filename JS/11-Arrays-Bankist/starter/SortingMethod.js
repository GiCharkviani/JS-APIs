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

// SORTING - will mutate original array - it does sorting based on strings
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements)
// console.log(movements.sort())

// fixing sorting
const sortedNumArr = movements.sort((a,b) => {
    // a - current, b - next

    // if return <= 0 , A, B (keep order)
    // if return > 0 , B, A (switch order)

    // in Ascending order: > 0
    if(a > b) return 1;
    if(a < b) return -1; 

    // in Descending order:
    /*
    if(a > b) return -1;
    if(a < b) return 1; 
    */
})
console.log(sortedNumArr)


// Improved
const improvedSortedArrat = movements.sort((a,b) => a - b);
console.log(improvedSortedArrat)
const improvedSortedArratReversed = movements.sort((a,b) => b - a);
console.log(improvedSortedArratReversed)

