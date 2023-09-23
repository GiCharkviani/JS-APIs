console.log('The helper has been loaded')


let count = 0
setInterval(function () {
    this.postMessage('Hello - ' + ++count)
}.bind(this), 1000)
