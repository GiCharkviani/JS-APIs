/* Leaflet Library for Map */
// CDN - Content Delivery Network
// where library is hosted and you can just import using script tags

// Alternative is NPM - Node Package Manager

// because it downloads earlier than this script, we can get access on that script's code

// as a rule, any variable that is globa, will be available among the other scripts too

// for this this script must be above all to be accessable for belowed scripts

const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
  .openPopup();


// EXTRA STAFF
window.oncontextmenu = function(e) {
    // e.preventDefault()
    
    console.log(e)
}

window.onselect = function(e) {
  e.preventDefault()
}

document.oncopy = function(e) {
  e.preventDefault()
}

