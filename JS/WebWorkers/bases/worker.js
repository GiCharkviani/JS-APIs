/* Dedicated worker */

// importScripts('helper.js');
// console.log('After helper loads');
//
// this.addEventListener('message', (messageEvent) => {
//     console.log('Message received - ' + messageEvent.data);
// })
//
//
// setTimeout(function () {
//     this.close()
// }.bind(this), 5000)


/* Shared worker */
let ports = [], i = 0;

this.addEventListener('connect', function(event){
    console.log('Connected');
    const port = event.ports[0];
    ports.push(port);
    port.start();

    port.addEventListener('message', function (e) {
        console.log("Received " + e.data)
    })

    setInterval(function () {
        i++
        ports.forEach(port => {
            port.postMessage('Sending Message ' + i)
        })
        if(i === 500) {
            this.close()
        }
    })


})
