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
/* Maps: Iteration */
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1,'C'],
    [2,'Java'],
    [3,'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again!']
])

console.log(question)

// Convert object to map
console.log(Object.entries(restaurant.openingHours))
const horusMap = new Map(Object.entries(restaurant.openingHours))
console.log(horusMap)

// Iteration
console.log(question.get('question'))
for(const [key, value] of question) {
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}
const answer = 5 || Number(prompt('Your answer'))

console.log(question.get(question.get('correct') === answer))

// Convert map to array
console.log([...question])
console.log([...question.entries()])
console.log([...question.keys()])
console.log([...question.values()])

/* Maps: Fundamentals */
// in Maps keys can have any type, but in objects just strings
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(')

// console.log(rest.get('name'))
// console.log(rest.get(true))

// const time = 21;
// const result = rest.get(time > rest.get('open') && time < rest.get('close'))
// console.log(result)

// console.log(rest.has('categories'))

// rest.delete(2)
// const arr = [1,2]
// rest.set(arr, 'test')
// rest.set(document.querySelector('h1'), 'Heading')
// console.log(rest)
// console.log(rest.size)
// // rest.clear()

// console.log(rest.get(arr))


