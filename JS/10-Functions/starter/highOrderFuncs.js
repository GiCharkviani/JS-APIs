// CB Function
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ')
}

//High-order function
const transformer = function(str, fn) {
    console.log(`Transformed string ${str}`)
    console.log(`Transformed string ${fn(str)}`) // calling callback

    console.log(`Transformed string by: ${fn.name}`) // function property name - func's name.
}
transformer('JavaScript is the best!', upperFirstWord) // passing as a value
transformer('JavaScript is the best!', oneWord)


// JS uses callbacks all the time
const high5 = function() {
    console.log('🤩')
}
document.body.addEventListener('click', high5)


