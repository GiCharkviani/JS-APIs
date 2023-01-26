// more here
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect() // coords (კოორდინატები) 

    console.log(e.target.getBoundingClientRect())

    console.log('Current scroll (X/Y)', window.scrollX, window.scrollY); // scroll info

    console.log('Height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth) // height of viewport

    //Scolling
    // window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY) // using coords

    // smooth scroll
    // window.scrollTo({
    //     left: s1coords.left + window.scrollX, 
    //     top: s1coords.top + window.scrollY,
    //     behavior: 'smooth'
    // })

    // newer solution
    section1.scrollIntoView({behavior: 'smooth'})
})

