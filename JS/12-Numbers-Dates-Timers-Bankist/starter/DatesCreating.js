/*  DATES & TIMES  */

// Create a date - 4 ways
/*
const now = new Date(); // Generates date
console.log(now);

console.log(new Date('Jan 04 2022 16:54:47')); // will parse time based on string
console.log(new Date('December 24, 2015')); // the same as above
console.log(new Date('2019-11-18T21:31:17.178Z')); // z - UTC
// if string is JS based, no problem, but if not, not reliable

console.log(new Date(2037, 10, 19, 15, 23, 5)); // generates based on number. Month is 0 based
console.log(new Date(2037, 10, 31)); // JS has autocorrection - 1st december

console.log(new Date(0)); // UNIX TIME = 1970, Jan, 1
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 1970, Jan, 4 - 3 days later
*/

// Date is also special type of Object
// based on this, we can get methods and refelct on date

// Working with dates
const future = new Date(2037, 10, 19, 15, 23)
console.log(future.getFullYear()) // 2037
console.log(future.getMonth()) 
console.log(future.getDate()) 
console.log(future.getDay()) 
console.log(future.getHours()) 
console.log(future.getMinutes()) 
console.log(future.getSeconds()) 

console.log(future.toISOString()) // 2037-11-19T11:23:00.000Z - to store date string in order to use

// TimeStamps
console.log(future.getTime()) // timestamp
console.log(new Date(2142242580000)) // reversing timestamp

console.log(Date.now()) // gives timestamp

// setting instead of getting
future.setFullYear(2040)
console.log(future)
// ... and others ...

