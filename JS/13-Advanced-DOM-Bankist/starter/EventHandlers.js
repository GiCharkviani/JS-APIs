
const h1 = document.querySelector('h1');

// this is better, because multi listeners might be added and also we can remove event listener

const alertH1 = function(e) {
    alert('addedEventListener: Great! You are reading the heading :D ')
}

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)

// this is old
// h1.onmouseenter = function(e) {
//     alert('onmouseenter: Great! You are reading the heading :D ')
// };


// there is also other way, in HTML:
// <h1 onclick="func()"></h1> - not good to use