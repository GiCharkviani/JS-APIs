// Flat chain of promises
const getCountryData = function (country) {
  // it will immediatly returns a promise
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      // it will still return a Promise, but if we manually returned other Promise, fulfill data will be that
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => console.log(data[0]));
};

// we should always return Promises, not to make inner than chain in order to not to end up in callback hell

getCountryData('USA');
