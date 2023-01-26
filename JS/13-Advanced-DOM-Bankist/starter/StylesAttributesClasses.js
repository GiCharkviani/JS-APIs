const message = document.createElement('div')
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`
const header = document.querySelector('.header')

header.after(message) 
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
    message.remove();
})

// Syles
message.style.backgroundColor = '#37383d';
message.style.widows = '120%'

console.log(message.style.backgroundColor) // we can't get properties that are defined in CSS file

// getting styles from CSS
// getComputedStyle(message).height = '500px' // they are READ-ONLY
console.log(getComputedStyle(message).height)
// in use:
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
console.log(getComputedStyle(message).height)

// accessing to CSS variables
document.documentElement.style.setProperty('--color-primary', 'orangered')

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className)

logo.alt = 'Beautiful minimalist logo';

//Non-standard
console.log(logo.designer) // won't work, because it's not standard property
console.log(logo.getAttribute('designer')) // instead of above
logo.setAttribute('company', 'Bankist')

// difference:
console.log(logo.src); // Relative (http...)
console.log(logo.getAttribute('src')) // Absolute (img/logo.png)

const link = document.querySelector('.nav__link--btn')
console.log(link.href); // http...
console.log(link.getAttribute('href')) // #

// Data attributes - should start with data-...
// in HTML: data-version-number
console.log(logo.dataset.versionNumber)

// Classes
logo.classList.add('c', 'j') // many classes
logo.classList.remove('c', 'j')
logo.classList.toggle('c')
logo.classList.contains('c')

// Don't use - it will override and only one class allowed
logo.className = 'jonas'
