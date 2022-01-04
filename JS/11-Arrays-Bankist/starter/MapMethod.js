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
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov){ // will mutate all elements and returns new array, but doesn't mutate origianl array
//     return mov * eurToUsd;
//     // return 23;
// });

// as an arrow
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

// loop based the same behavior
const movementsUSDFor = [];
for(const mov of movements) movementsUSDFor.push(mov * eurToUsd);
console.log(movementsUSDFor);


// map also has access to index and full array by args
const movDesc = movements.map((mov, i, arr) => 
     `Movement ${i+1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
)

console.log(movDesc)