/* CLOSURES */
const secureBooking = function() {
    let passengerCount = 0;
    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`)
    }
}

const booker = secureBooking();
// booker()
// booker()
// booker()

// console.dir(booker) // look into function directory
// [[]] internal property that we can't access from code


/*  Closures Examples  */
// Example 1
let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2)
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2)
    }
}

g()
// f()
// console.dir(f)

// Re-assigning f function
h()
// f()
// console.dir(f)



// Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n/3;

    setTimeout(function(){
        // this function creates closure, hence even after some time, it still has access to all variables in Execution Context
        console.log(`We are now boarding all ${n} passengers`)
        console.log(`There are 3 groups, each with ${perGroup} passengers`)
    }, wait*1000)

    console.log(`Will start boarding in ${wait} seconds. `)
}

const perGroup = 1000; // if there was not the same variable in EC of setTimeout()'s function
boardPassengers(180, 3)