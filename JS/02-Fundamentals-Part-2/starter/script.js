/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

// if(passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio';
// const private = 534;
*/

/*
// Function declaration
const age1 = calcAge1(1994)
function calcAge1(birthYear) {
    return 2037 - birthYear
}

console.log(age1)

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}
const age2 = calcAge2(1994)

console.log(age2)

// Arrow function (Function expression)
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);
*/
/*
// Arrays
// array literall
const years = [1991,1984,2008,2020]
// array object
const years1 = new Array(1991,1984,2008,2020);
console.log(years1)
console.log(years1.length)
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann',years, 2037 - 1991]
console.log(jonas)
const popped = jonas.pop()
console.log(popped)
console.log(jonas)
*/

// Objects
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1994,
    job: 'teacher',
    friends: ['Gio', 'Beqa', 'Gela'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear
    // }

    // calcAge: function() {
    //     return 2037 - this.birthYear
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age
    },

    getSummery: function () {
        return this
    }
    
}

const calcAge = jonas.calcAge()
console.log(calcAge)
console.log(jonas.getSummery())

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🍜`)
// }

let rep = 1;
while(rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🍜`)
    rep++
}

let dice = Math.trunc(Math.random()*6)+1;
console.log(dice)
while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
    if(dice === 6 ) console.log('loop is about to end...')
}
