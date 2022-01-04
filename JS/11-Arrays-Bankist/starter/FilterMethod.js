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
// const deposits = movements.filter(function(mov){ // it also gets access to index and full array
//     return mov > 0; // if this is true, include, if not, filter out
// })
const deposits = movements.filter(mov => mov > 0);
console.log(movements)
console.log(deposits)

const withdrawals = movements.filter(mov => mov < 0)
console.log(withdrawals)

// loop way
const depositsFor = [];
for(const mov of movements) if(mov > 0) depositsFor.push(mov);
console.log(depositsFor)
