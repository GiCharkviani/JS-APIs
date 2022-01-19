/* OLD WAYS OF MODULES */

// all of these is done, because of closures, as function never loses connection with it's child functions that were returned
// this can't be used in boundling as well.
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity}  ${product} added to cart (shipping cost is ${shippingCost})`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity}  ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

// What are in modles can't be accessed from browser's console, as the are private to this module


ShoppingCart2.addToCart('Apple', 4)
ShoppingCart2.addToCart('Pizza', 2)
console.dir(ShoppingCart2)