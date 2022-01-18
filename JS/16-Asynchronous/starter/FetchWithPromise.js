// Promises with Fetch()
const request = fetch(`https://restcountries.com/v3.1/name/USA`);

const getCountryData = function (country) {
  // it will immediatly returns a promise
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      // this callback function takes XMLHttpRequest-like response
      return response.json(); // json also is an asynchronus function, so it also returns a promise
    })
    .then(function (data) {
      console.log(data);
    });
};

getCountryData('USA');
