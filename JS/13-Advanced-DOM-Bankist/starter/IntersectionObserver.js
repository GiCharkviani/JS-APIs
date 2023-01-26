// Intersection Observer API

const section1 = document.getElementById('section--1');

const obsCallback = function (entries, observer) {
  // this will be called everytime target intersection with root element by 10% (as written in threshold)
    entries.forEach(entry => {
        console.log(entry)
    });
};

const obsOptions = {
  root: null, // Element that target is intersecting. if null - all viewport will be target
  threshold: [0, 0.2], // % of intersection, which the observer will be called. we can also have multiple of them (array)
  // this property defines how much percent of element should appear to call callback func
  // as an array: first is when to call, if second is 1, it means only then will be called, when 100% of element is visible, third is - when to call on leaving
  rootMargin: '-90px' // applied on root element, must be px
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1); // target element
observer.unobserve(section1) // unobservs