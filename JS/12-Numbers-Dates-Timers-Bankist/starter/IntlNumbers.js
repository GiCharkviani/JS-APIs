/*  NUMBERS  */
// NumgerFormat() - for formatting numbers
const num = 3456465465.23;

// again for configuring
const options = {
    style: 'unit',
    unit: "celsius",
    // useGrouping: false, // grouping will be off, without separators
}
// many other
// the same about percent, mph, currency

console.log('Unit: ',new Intl.NumberFormat('en-US', options).format(num)) // Unit: 3,456,465,465.23 mph


console.log('US:    ',new Intl.NumberFormat('en-US').format(num)) // 3,456,465,465.23
console.log('Germany:    ', new Intl.NumberFormat('de-DE').format(num)) // 3.456.465.465,23
console.log('Syria:    ', new Intl.NumberFormat('ar-SY').format(num)) // ٣٬٤٥٦٬٤٦٥٬٤٦٥٫٢٣

console.log('Local:    ', new Intl.NumberFormat(navigator.language).format(num)) // 3,456,465,465.23

