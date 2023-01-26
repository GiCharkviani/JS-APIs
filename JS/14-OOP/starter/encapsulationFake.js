/* ENCAPSULACTION - PROTECTED PROPERTIES AND METHODS */
// JS doesn't have privet methods or properties
// here we will just fake encapsulation
// _ only this will be used 0 it's just convention
// and is used only for developers to let them know not to use this property outside of the class

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // Protected property
    this._movements = []; // property that is not based on any input
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface - abstraction
  getMovements() {
      return this._movements
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // Protected Method
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111)

acc1.deposit(250)
acc1.withdraw(140)
acc1.requestLoan(1000)

console.log(acc1.getMovements()) // correct way now

console.log(acc1)
console.log(acc1.pin)
