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


if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open)
console.log(restaurant.openingHours?.mon?.open)

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed'
    console.log(`On ${day}, we open at ${open}`)
}

// Methods
console.log(restaurant.order?.(0,1) ?? "Method does not exist")
console.log(restaurant.orderRisotto?.(0,1) ?? "Method does not exist")

// Arrays
const users = [
    {name: 'Jonas', email: 'Hello@jonas.io'}
]
console.log(users[0]?.name ?? 'User array empty')

// alternative to above
if(users.length > 0) console.log(users[0].name); else console.log('user array empty')