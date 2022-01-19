/* Promise Combinators */
/* Promise.race */
//recives array of promises and returns promise - it's sattled as one of the input promises sattles (if value is available, not reject or resolve)
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
