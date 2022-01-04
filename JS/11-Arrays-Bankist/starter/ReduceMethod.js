'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'], // each is entry, where first is key, the second is value
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
console.log(movements);

// accumulator -> SNOWBALL;
// const balance = movements.reduce(function(acc, cur, i, arr){// will be one value
//     console.log(`Iteration ${i}: ${acc}`) // observing
//     return acc + cur // each time returning updated accumulator, in order to add another current for the next iteration
// }, 0) // this is the initial value of accumulator from beginning
// console.log(balance)

// arrow way
const balance = movements.reduce((acc, cur) => acc + cur, 0) 
console.log(balance)

let balance2 = 0;
for(const mov of movements) balance2 += mov;
console.log(balance2)