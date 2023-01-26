/* Geolocation API */
// Browser has a lots of APIs including navigator that has geolocation property and its own functions as well related to location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      console.log(`your location: https://www.google.ge/maps/@${position.coords.latitude},${position.coords.longitude}`);
    },
    err => {
      console.log(err);
    }
  );
}
