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

// for of loop
// for(const movement of movements) {
    for(const [i, movement] of movements.entries()) {
    if(movement > 0) console.log(`Movement ${i+1}: You deposited ${movement}`)
    else console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`)
}

console.log('---------- FOREACH -----------')

// forEach()
movements.forEach(function(movement, index, array){ // on each iteration calls this function and will get element as an argument

// it not only passes a current element, but index and full array as well
    // console.log(`Looping array: ${array}`)
    if(movement > 0) console.log(`Movement ${index+1}: You deposited ${movement}`)
    else console.log(`Movement ${index+1}: You withdrew ${Math.abs(movement)}`)
}) // no break or continue operators

