// Data needed for first part of the section
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

//Spread Operator
const arr = [7, 8, 9];
//bad way
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
//spread
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // individual elements of array

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // creates completely new array
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy, like object.assign()

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.']; // str turned into array
console.log(letters);
console.log(...str);

// Real-World example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients)

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998,...restaurant, founder: 'Guiseppe'}
console.log(newRestaurant);

const restraurantCopy = {...restaurant}; // the same as object.assign()
console.log(restraurantCopy);

