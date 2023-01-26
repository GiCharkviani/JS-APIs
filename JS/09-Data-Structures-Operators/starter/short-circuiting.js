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
  
    orderPizza: function(mainIngredient, ...otherIngredients) {
      console.log(mainIngredient, otherIngredients)
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

console.log('---------OR------------')
// Use ANY data type, return ANY data type, short-circuiting

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null) // Hello will be printed

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---------AND------------')
console.log(0 && 'Jonas')
console.log(7 && 'Jonas')

console.log('Hello' && 23 && null && 'Jonas')

// Practical example
// if(restaurant.orderPasta) {
//     restaurant.orderPizza('mushrooms', 'spinach')
// }

restaurant.orderPizza && restaurant.orderPizza('muhsrooms', 'spinach');

