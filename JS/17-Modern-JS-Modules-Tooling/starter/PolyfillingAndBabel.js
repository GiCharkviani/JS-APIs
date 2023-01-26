/* Polyfilling -  which browsers might use */
// Parcel automaticly uses Babel for polyfilling
// Babel uses presets to figure out which version of browser uses code
/*
also we can use core-js library for polifylling
as they started recommending other libraries:
one of them is - core-js => npm i core-js
and then import like this:

import 'core-js/stable';
or just use only some case:
import 'core-js/stable/array/find';
import 'core-js/stable/array/promise';

also others are from this library => npm i regenerator-runtime
which is for async functions polyfilling
and use so:
import 'regenerator-runtime/runtime'
*/
