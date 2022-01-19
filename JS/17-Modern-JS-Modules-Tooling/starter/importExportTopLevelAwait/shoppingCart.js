// Exporting Module
console.log('Exporting module')

/* Diferent Type of Exports */
/*
const shippingCost = 10;
const cart = [];

// one way of exporting
export const addToCart = function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity}  ${product} added to cart`)
}

const totalPrice = 237;
const totalQuantity = 23;

// other way of exporting
export {totalPrice, totalQuantity as tq};

// Default exports - when we export only one thing from module
export default function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity}  ${product} added to cart`)
}
*/


/* TOP-LEVEL AWAIT */
// exporting top-level await:
// this will block execution not only in this module, but in that, where it's imported
console.log('started fetching')
export const users = await fetch('https://jsonplaceholder.typicode.com/users')
console.log('finished fetching')