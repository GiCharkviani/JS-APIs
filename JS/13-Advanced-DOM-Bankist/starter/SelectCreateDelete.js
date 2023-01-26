/* Selecting Elements */
// Entire Document
console.log(document.documentElement)

// Head - special element
console.log(document.head)

// Body - special emenet
console.log(document.body)

// Other element
console.log(document.querySelector('.header'))

// Othe elements
const allSections = document.querySelectorAll('.section') // NodeList
// is just snapshot, not dynamic, reads what was initialized from beginning
console.log(allSections)

// ID Element
document.getElementById('#section--1');

// Tag  name
const allButtons = document.getElementsByTagName('button'); // HTML Collection
// is dynamic, will update if elements change
console.log(allButtons)

// Class name
const btnClass = document.getElementsByClassName('btn') // HTML Collection

/* Creating adn inserting elements */

// .inertAdjacentHTML - easiest and quickest way to create and insert elments using just strings

const message = document.createElement('div')
message.classList.add('cookie-message')
// message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`
const header = document.querySelector('.header')
header.prepend(message) // inserting element as an first child as this element
// header.append(message) // as a last child
// element will be added only once, even though we used 2 methods to insert element into DOM

header.append(message.cloneNode(true)) // it will copy element, arg means - true - all child elements will be copied as well

// to append element before or after of sibling element (sibling=message)
// header.before(message)
// header.after(message)

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
    message.remove();
    // message.parentElement.removeChild(message) // old method
})