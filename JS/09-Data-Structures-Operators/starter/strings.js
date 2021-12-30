const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructure as parameter
  orderDelivery: function ({
    time = '20:00',
    address,
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


/* Working With Strings - PART 3 */

// Split and Join
console.log('a+very+nice+string'.split('+'))
console.log('Jonas Schmedtmann'.split(' '))

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName)

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName)

const capitalizeName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];
    for(const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1)) 
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }
    console.log(namesUpper.join(' '))
}

capitalizeName('jessica ann smith davis');
capitalizeName('giorgi charkviani')


// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'))
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'))

const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*')
}

console.log(maskCreditCard(45213541))
console.log(maskCreditCard(12321133213458))
console.log(maskCreditCard('12321132133213458'))

// Repeat
const message2 = 'Bad weather... All Departures Delayed ';
console.log(message2.repeat(5))

const planesInLine = function(n) {
    console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`)
}
planesInLine(5)
planesInLine(3)
planesInLine(12)


// There are much more strings methods on MDN

/* Working With Strings - PART 2 */
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.toLowerCase())
// console.log(airline.toUpperCase())

// // Fix capitalization in name
// const passanger = 'jOnAS' // Jonas
// const passengerLower = passanger.toLowerCase()
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
// console.log(passengerCorrect)

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';
// // const lowerEmail = loginEmail.toLowerCase()
// // const trimmedEmail = lowerEmail.trim()
// // console.log(trimmedEmail)
// const normalizedEmail = loginEmail.toLowerCase().trim()
// console.log(normalizedEmail)
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = '288,97£'
// const priceUS = priceGB.replace('£', '$').replace(',', '.') // doesn't mutate, just creates new string. it's also case sensitive
// console.log(priceUS)

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate')) // only first was replaced
// console.log(announcement.replaceAll('door', 'gate')) // all replaced
// console.log(announcement.replace(/door/g, 'gate')) // all replaced using regex


// // Booleans
// const planeHere = 'Airbus A320neo';
// console.log(planeHere.includes('A320'))
// console.log(planeHere.includes('Boeing'))
// console.log(planeHere.startsWith('Air'))

// if(planeHere.startsWith('Airbus') && planeHere.endsWith('neo')) console.log('Part of the NEW  Airbus family') 


// // Practice exercise
// const checkBaggage = function(items) {
//     const baggage = items.toLowerCase();
//     if(baggage.includes('knife') || baggage.includes('gun')) {
//         console.log('You are NOT allowed on board')
//     } else {
//         console.log('Welcome aboard!')
//     }
// }
// checkBaggage('I have a laptop, some Food and a pocket Knife')
// checkBaggage('I have socks and camera')
// checkBaggage('Got some snacks and gun for protection')






/* Working With Strings - PART 1 */
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r')); // strings are also 0 based
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal')); // this is also case sensitive

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' '))); // not knowing a string
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2)); // from the end
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//     // B and E are middle seats
//     const s = seat.slice(-1)
//     if(s === 'B' || s === 'E') 
//     console.log('You got the middle seat 😬');
//     else
//     console.log('You got lucky 🤗')
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// // this process is called boxing - when js turns strings into objects (array):
// console.log(new String('Gis'))
// console.log(typeof new String('Gis'))
// console.log(typeof new String('Gis').slice(1))