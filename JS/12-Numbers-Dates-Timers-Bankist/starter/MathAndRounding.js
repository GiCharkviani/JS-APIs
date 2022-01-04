/*  NUMBERS  */

// Roots
console.log(Math.sqrt(25)); // 5 - square root
console.log(25 ** (1 / 2)); // 5 - square root
console.log(8 ** (1 / 3)); // 2 -- cube root

// Max
console.log(Math.max(5, 23, 11, 2)); // 23
console.log(Math.max(5, '23', 11, 2)); // 23
console.log(Math.max(5, '23px', 11, 2)); // Nan

// Min
console.log(Math.min(5, 23, 11, 2)); // 2

// Constants
console.log(Math.PI * Number.parseFloat('10px')**2) // area of circle - pr^2

// Random
console.log(Math.trunc(Math.random()*6)+1) // will delete decimal part = 1-6

// always between some numbers
const randomInt = (min, max) => Math.floor(Math.random()*(max-min)+1) + min // 0...1 -> 0...(max-min) -> min...max
console.log(randomInt(10,20))


// Rounding integers - all of them will have type cuorsion
console.log(Math.trunc(23.3)) // delete decimal part (.n)

console.log(Math.round(23.3)) // 23 nearest
console.log(Math.round(23.9)) // 24

console.log(Math.ceil(23.3)) // 24 ceil
console.log(Math.ceil(23.9)) // 24

console.log(Math.floor(23.3)) // 23 floor
console.log(Math.floor(23.3)) // 23

// wont't work the same way in negative numbers
console.log(Math.trunc(-23.3)) // -23
console.log(Math.floor(-23.3)) // -24

// Rounding Decimals - will solve rounding errors on decimal side
console.log((2.7).toFixed(0)) // 3 - string
console.log((2.7).toFixed(3)) // 2.700 - string
console.log(+(2.345).toFixed(2)) // 2.35 - number
// behind the secenes, JS will do here boxing, turn them into Number object, do staff and then again turn them back to primitive type


// There are plenty of Math funcs more