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

// Map
currencies.forEach(function(value, key, map){ // first element, sec - key and third - full mapp
    console.log(`${key}: ${value}`)
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique)
currenciesUnique.forEach(function(value, _, map){
    console.log(`${_}: ${value}`) // ke is the same as value, because set doesn't gave keys or indexes
})

// _ throw away variable