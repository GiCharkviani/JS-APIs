/*  NUMBERS  */
// in JS all numbers ar floating
// numbers ar represented 64 based 2 format - always stored as a binary format

console.log(23 === 23.0)

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.333333(3)
// Binary base 2 - 0 1. here we also get infinite fraction
console.log(0.1 + 0.2) // bag in JS also the same in PHP and Ruby
console.log(0.1 + 0.2 === 0.3) // false - but must be true

// Working on Numbers

// Conversion
console.log(Number('23'))
console.log(+'23')

// Parsing
console.log(Number.parseInt('30px', 10)) // it must strat with number
// Radix - is a base of numeral symbols that we use, like base10, or base2. this is the second argument of parseInt()

console.log(Number.parseInt('  2.5re  m')) // 2
console.log(Number.parseFloat('2.5rem  ')) // 2.5

// parse functions are global functions, hence not needed to use with Number. because it provides namspace for those function
// just - parseInt() or parseFloat()

// Check if value is NaN
console.log(Number.isNaN(20)) // false -checks if is not a number
console.log(Number.isNaN('20')) // fasle
console.log(Number.isNaN(+'20X')) // true
console.log(Number.isNaN(23/0)) // true - because it returns Infinity

// Checking if value is number - the best way
console.log(Number.isFinite(23)) // true - checks if it's finite
console.log(Number.isFinite('23'))  // false
console.log(Number.isFinite(+'23X')) // false
console.log(Number.isFinite(23/0)) // false

console.log(Number.isInteger(23)) // true
console.log(Number.isInteger(23.0)) // true
console.log(Number.isInteger(23/0))  // false

