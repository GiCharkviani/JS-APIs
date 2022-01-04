/*  DATES & TIMES  */

// Internationalizing Date API from JS
const now = new Date();
// this object will be passed as an second arg and will determine time format
// website for some formats https://devhints.io/wip/intl-datetime
const options = {
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  year: 'numeric',
  weekday: 'long'
};

// will get from user
const locale = navigator.language; 
console.log(locale) // en-US

// main func using .format() method to get new Date() object
const internatDate = new Intl.DateTimeFormat(locale, options).format(now);
console.log(internatDate);

// Intl is used for more: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl