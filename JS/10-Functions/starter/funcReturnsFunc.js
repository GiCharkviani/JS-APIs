const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('Hey');
greeter('Jonas');
greeter('Steven');

greet('Hello')('Jonas') // if it returns a function

// the same as aboce but arrow func
const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`)
greet2('Hello')('Gio')

