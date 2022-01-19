const request = fetch(`https://restcountries.com/v3.1/name/USA`);
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      if(!response.ok)
        throw Error(`Country not found ${response.status}`) // after using throw, Promise will be rejected, so this error message will appear in catch method

      return response.json()
    })
    .then(data => {
      console.log(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => console.log(data[0]))
    .catch(err => {
      // Other way of catching errors
      console.error(`${err} 🥵🥵😱`);
    })
    .finally(() => {
      //  this is used in both cases, so it runs even if it's error or not error
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
