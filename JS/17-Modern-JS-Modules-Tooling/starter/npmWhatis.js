/* NPM */
/*
is as software also package manager repository

before NPM we used to use global script tag's to import external libraries
they were exposing global variables that we had access in all JS code

orders:
npm init -y  // NPM INITIALIZED

// installing packages:
npm install [package]

// also we can't use commonJS modules if don't have boundlers, for that, we have to look for es modules of packages
// they usually look like this: e.g. lodash-es => npm i lodash-es
*/

// Example
// import cloneDeep from 'lodash-es/cloneDeep';

// const state = {
//   cart: [
//     { product: 'bread', quantity: 5 },
//     { product: 'pizza', quantity: 5 },
//   ],
//   user: { loggedIn: true },
// };

// // copying
// const stateClone = Object.assign({}, state)
// // deep clone
// const stateDeepClone = cloneDeep(state);
// state.user.loggedIn = false;

// console.log(stateClone)
// console.log(stateDeepClone)