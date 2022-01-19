'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${
        Object.keys(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.keys(data.currencies)[0]
      }</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

/*
const getCountryDataAndNeighbor = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  // when data arrives
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render counry 1
    renderCountry(data);

    // Get neighbour country
    const [neighbour] = data.borders;
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function() {
        const [data2] = JSON.parse(this.responseText);
        renderCountry(data2, 'neighbour');
    })
  });
};
getCountryDataAndNeighbor('CANADA');
*/

/*
// Promises with Fetch()

const request = fetch(`https://restcountries.com/v3.1/name/USA`);
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      if (!response.ok) throw Error(`Country not found ${response.status}`); // after using throw, Promise will be rejected, so this error message will appear in catch method

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      renderError(`Something went wrong 😌😴 ${err.message}`);
      console.error(`${err} 🥵🥵😱`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('USA');
});

// One way of handling errors in Promises
// fetch(`https://restcountries.com/v3.1/name/${country}`).then(
//   response => response.json(),
//   err => console.log(err)
// );

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
const getPosition = function() {
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

getPosition().then((res) => console.log(res))

*/
/*
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
(async function() {
  try {
    const city = await whereAmI();
    console.log(city)
  } catch(e) {
    console.error(e)
  }
})()
*/

/*

// Promise All, when you don't want to wait for all of them one by one, and wanna run all together

const getJSON = async function(link) {
  const data = await fetch(link)
  return data.json()
}

const get3Countries = async function (c1, c2, c3) {
  try {
    // so it will wait for each other
      // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);

      // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);

      // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    

    // so it will run together
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`)
    ])

    console.log(data)

  } catch (err) {
    console.error(err);
  }
};

get3Countries('USA', 'CANADA', 'UK')

*/

/* Promise Combinators */
// Promise.race - recives array of promises and returns promise - it's sattled as one of the input promises sattles (if value is available, not reject or resolve)
// as a result, returns only that promise, who won the race, hence who fulfilled first
const getJSON = async function (link) {
  const data = await fetch(link);
  return data.json();
};

const race = async function () {
  const [res] = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res);
};
race();

// will reject after some time
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long!'));
    }, sec * 1000);
  });
};
// if timeout happens first, all of others will be rejected
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(0.1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

/* Promise.AllSettled - it's from ES2020 */
// takes array of promises and returns all settled promises
// will never short-circuit, it will just return all the results as it is
// in contrast with Promise.All, on reject, it will return error
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.resolve('More Success'),
  Promise.reject('no no no baby'),
]).then(res => console.log(res));

/* Promise.any - it's from ES2021 */
// takes an array of promises, and returns first fulfilled Promise, but as opposed to Promise.race, rejected Promises are ignored
Promise.any([
  Promise.resolve('Success Any'),
  Promise.resolve('More Success Any'),
  Promise.reject('no no no baby Any'),
])
  .then(res => console.log(res))
  .catch(e => console.error(e));

// All is done well
