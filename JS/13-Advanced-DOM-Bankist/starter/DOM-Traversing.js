// DOM traversing - Walking through the DOM
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight')) // finds children
console.log(h1.childNodes) // Nodes
console.log(h1.children) // Collection
h1.firstElementChild.style.color = 'white'
h1.lastElementChild.style.color = 'orangered'

// Going upwards: parents
console.log(h1.parentNode); // Node
console.log(h1.parentElement); // Node

h1.closest('.header').style.background = 'var(--gradient-secondary)' // closest element - finds parents

h1.closest('h1').style.background = 'var(--gradient-primary)' // if it is itself, it will be :D 


// Going sideways: siblings
console.log(h1.previousElementSibling)
console.log(h1.nextElementSibling)

console.log(h1.previousSibling)
console.log(h1.nextSibling)

console.log(h1.parentElement.children);
// making array from HTML collection
[...h1.parentElement.children].forEach(element => {
    if(element !== h1) element.style.transform = 'scale(0.5)'
});
