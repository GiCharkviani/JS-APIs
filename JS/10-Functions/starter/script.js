// all done well!

(function() {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'blue' // will get access, because this function in closure has all Execution Context variables
    })
})()