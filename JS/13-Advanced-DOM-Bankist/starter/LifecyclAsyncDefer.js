// LifeCycle

/**
 * 1. When HTML is downloaded and transfered into DOM structure (this won't wait for other things, like imgs, just HTML and JS)
 * 2. Load event - when all images and external resources has loaded
 * 
 */

// 1
document.addEventListener('DOMContentLoaded', function(){
    console.log('HTML parsed and DOM tree built')
})
// because of <script> is in the end, we don't have to listen DOMContentLoaded event


// 2
window.addEventListener('load', function(e){
    console.log('Page fully loaded', e)
})

// before leaving
// window.addEventListener('beforeunload', function(e){
//     e.preventDefault();
//     console.log(e);
//     e.returnValue = '';
// })

/* Efficent Script Loadin: defer and async */
// end the end of body, ASYNC, DEFER
// in the end of body - old school but still useful
// ASYNC - good for third party libraries that doesn't interact with DOM
// DEFER - good for our scripts