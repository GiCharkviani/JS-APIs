
// rgb(255,255,255)
const randomInt = (min, max) => Math.floor(Math.random()*(max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

// EVENT BUBBING
document.querySelector('.nav__link').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor()
    console.log('LINK', e.target, e.currentTarget) 
    // target - where the event first happened, so where the click happened
    // currentTarget - where the event was attached
    // currentTarget === this keyword

    // STOP PROPAGATION
    e.stopPropagation()

    // TO PREVENT DEFAULT
    e.preventDefault() // in order to get rid of default behavior of element
})
document.querySelector('.nav__links').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor()
    console.log('CONTAINER', e.target, e.currentTarget) 
})
document.querySelector('.nav').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor()
    console.log('NAV', e.target, e.currentTarget) 
    
}, false) // if third argument is true, event will be handled on the way down (on default, it's handled on the way back)
// which means - capturing and bubbling - capturing way down on DOM tree, bubbling - way back on DOM tree



