// Async/Await
// it returns promise
// try/catch statement - can be used here as well
// catch block also can catch throw errors
const whereAmI = async function (country) {
  try {
    const found = await fetch(`https://restcountries.com/v3.1/name/${country}`);

    const [jsonData] = await found.json();

    console.log(jsonData);
    return jsonData;
  } catch (e) {
    console.error(e);

    // Reject promise returned from async function
    throw e;
  }
};

whereAmI('USA');

// try/catch statement - it's used in usual JS synchronous code as well

try {
  let y = 1;
  const x = 3;
  x = 3;
} catch (e) {
  console.log(e, 'eyyy');
}

console.log('1: Will get location');
// const city = whereAmI('FRANCE');
// console.log(city)

// still can use then chain. havet use return in fuction, but error should't happen
// also we can catch errors on function as well and read them, but for this we have to throw as well in catch block
whereAmI('FRANCE')
  .then(city => console.log(city))
  .catch(e => console.log(e))
  .finally(() => {
    console.log('3: Finished getting locaion');
  });

// if we don't want function that needs to be called, then we use EEFE:
(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (e) {
    console.error(e);
  }
})();
