const flight = 'LH234';
const jonas = {
    name: 'Jonas Schedtmann',
    passport: 21345465
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'Lh999'; // will copy
    passenger.name = 'Mr. ' + passenger.name; // will reference

    if(passenger.passport === 21345465) {
        console.log('Check in')
    } else {
        console.log('Wrong passport')
    }
}

checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random()*1000000000);
}

newPassport(jonas)
checkIn(flight, jonas)