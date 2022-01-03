'use strict';
/* Imemediately Invoked Function Expressions - IIFE*/
// main reason is privacy of variables - function scope
// don't forget semicolon - ;
// Runs only once - expression
const runOnce = (function () {
  console.log('This will never run again - expression ');
})();

// Runs only once - Declaration
(function () {
  console.log('This will never run again - Declaration');
  const isPrivate = 23;
})();

// Runs only once - Arrow
(() => console.log('This will never run again - Arrow'))();

// Block scoped
// {
//     const isPrivate = 12;
//     let isPraveting = 15;
// }

/*

var - is function scoped, but not block scoped
that's why, before let and const, for safety, they used to use IIFE type of funcs in order ro avoid rewriting variables

*/