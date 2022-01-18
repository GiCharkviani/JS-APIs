/* ENCAPSULACTION - CLASS FIELDS AND METHODS */

/*

there are 8 fields and methods
we will go through 4:
  1. Public fields
  2. Private fields
  3. Public methods
  4. Private methods
 (there is also the static version)
*/

// Fields will always be on instances, but methods on Prototype
class Account {
  // Public fields (instances)
  locale = navigator.language;

  // Private fields (instances - #)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    // Public properties setting
    this.owner = owner;
    this.currency = currency;
    // Private property
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Methods
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

//   static helper() {
//       console.log();
//   }

  // Private Methods - but yet it's seens as a private class field, not as a method, so it's on instance, not on prototype as it should be
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements()); // correct way now
console.log(acc1);

// console.log(acc1.#movements) // won't be able to read
// console.log(acc1.#pin) // won't be able to read
console.log(acc1.#approveLoan(100)) // won't be able to read
