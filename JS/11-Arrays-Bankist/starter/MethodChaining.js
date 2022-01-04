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

// Methods Chaining
// we can only chain, in this case, if the first one returns an array
// PIPELINE - მილსადენი
const result = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 1.2)
  .reduce((acc, cur) => acc + cur, 0);
console.log(result);

// never chain methods that will mutate original array