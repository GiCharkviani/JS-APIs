'use strict';
/* XMLHttpRequest */

const getCountryData = function (country) {
  // AJAX - Asynchronus Javascript And Xml
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`); // Opening request

  request.send(); // will send request

  // when data arrives
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Get neighbour country
    const [neighbour] = data.borders;
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
    });
  });
};

// if we have a lots of calls, we can end-up in callback HELL

getCountryData('USA');
getCountryData('CANADA');
getCountryData('GERMANY');
getCountryData('POLAND');
getCountryData('FRANCE');
