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

// Property NAMES
const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(restaurant.openingHours)) {
  openStr += `${day}, `;
}
// console.log(openStr)

// Property VALUES
const values = Object.values(restaurant.openingHours);
// console.log(values)

// Entire object
const entries = Object.entries(restaurant.openingHours);
// console.log(entries)

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}