// PROMISE
// they are special kind of object

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🎟');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 🎁'); // fulfill - will mark promise as a fulfilled function - resolved
      // whatever you pass in this function, will be available in .then handler
    } else {
      reject(new Error('You lost your money 😒')); // will be to .catch handler or uncought Promise error
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// real world example
// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(5)
  .then(() => {
    console.log('I waited for 5 seconds');
    return wait(2);
  })
  .then(() => console.log('I waited 2 seconds'));

// Promisifying Geolocation
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(res => console.log(res));
