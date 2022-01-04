/*  DATES & TIMES  */

// when you attempt to convert date into number, the result will be - the timestamp

// Converting into numbers
const future = new Date(2037, 10, 19, 15, 23)
console.log(Number(future));
console.log(+future);

// Substracting Dates
const calcDaysPassed = (date1, date2) => Math.abs(date2-date1)/(1000*60*60*24);
const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1)

// Moment.js Date Library