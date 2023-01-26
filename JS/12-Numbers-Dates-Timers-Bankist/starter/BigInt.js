/*  NUMBERS  */
// 64 bits means, there is exactly 64 wits to represent any number
// only 33 are used for digits
// because of this there is a limit of number
console.log(2**53-1) // the biggest number JS might represent
console.log(Number.MAX_SAFE_INTEGER) // the same

console.log(2**53 +1 ) // will confise already JS


// BigInt - as long as we want - just add n in the end to number
console.log(4654654561651651561651561561516532132132564n)
console.log(BigInt(465465456165)) // should be used with small numbers

// Operations with BigInt
console.log(1000n + 1000n) // both must have n
console.log(456456156165165156165123132132156165n * 1000n)
// console.log(Math.sqrt(16n)) // won't work

// can't mix with regular numbers
const huge = 54654564561465165126613165156165n;
const num = 23;
// console.log(huge*num); // error
console.log(huge*BigInt(num)) // works

// Exceptions with BigInt
console.log(20n > 15) // works
console.log(20n === 20) // false, because they have different primitive type
console.log(typeof 20n) // bigint
console.log(20 == 20) // true

console.log(huge + ' is REALLY big!!!') // works

// Divisions with BigInt
console.log(10n/3n) // 3n
console.log(10/3) // 3.33333333335