const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book : function() {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({
      fligth: `${this.iataCode} ${flightNum}`,
      name: `${name}`,
    });
  },
};

lufthansa.book(234, 'Giorgi Charkviani');
lufthansa.book(635, 'John Smith');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah Williams') // won't work

/* call, apply and bind - func methods */

// Call method - .call() - will call func and set this keyword for first argument passed obj
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Marry Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 33, 'Beqa Gagava');
console.log(swiss);

// Apply method - .apply() - instead of one, will take array of arguments
const flightData = [121, 'George Cooper'];
book.apply(swiss, flightData);
// book.call(swiss, ...flightData) // the same as aboce
console.log(swiss);

/* BINDIIIING */
// Bind method - .bind() - returns a new function, where this keyword is already bound
// book(23, 'Sarah Williams')
const bookEW = book.bind(eurowings);
const bookLW = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(1523, 'Steven Williams');

// bind for specific args - predefined args
// it's called partial application as well
const bookEW23 = book.bind(eurowings, 2525);
bookEW23('Name Man');
bookEW23('Martha Cooper');
console.log(eurowings);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane()

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // if not bind, this will be binded to html element


// Partial Application - preset parameters
const addTax = (rate, value) => value + value*rate
console.log(addTax(0.1, 200))

// presetting params using .bind()
const addVAT = addTax.bind(null, 0.23) // order of arguments is important
console.log(addVAT(15))


// challange
const challangeVAT = function(value) {
    return function(rate = 0.23) {
        console.log(`The VAT is: ${value + value * rate}`)
    }
}
challangeVAT(15)()