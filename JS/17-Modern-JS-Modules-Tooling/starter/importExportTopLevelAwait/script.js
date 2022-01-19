// Importing Module
console.log('Importing module');
/* Diferent Type of Imports */

/*
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
addToCart('Puri', 15);
console.log(price, tq)

// import all the exports of module - creating Namespace
import * as ShoppingCart from './shoppingCart.js';
// created namespace
console.log(ShoppingCart.tq);
ShoppingCart.addToCart('bread', 5);

// we can name what we want and will import only thing that is exported
import add from './shoppingCart.js';
add('pizza', 2)

// or just use together - but usually don't do it
import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
add('pizza', 2)
console.log(price)
*/

/* TOP-LEVEL AWAIT */
// in Modules we can use async keyword outside of async function
// Blocking effect of top-level await:
// console.log('Start fetching')
// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await res.json()
// console.log(data)
// // will log after await
// console.log('Something')

// useful usage of top-level await:
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = await getLastPost();
console.log(lastPost);

// usage of top-level await in modules:
import { users } from './shoppingCart.js';
