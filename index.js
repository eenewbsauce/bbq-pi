const Gpio = require('onoff').Gpio;
const led = new Gpio(14, 'out');
// const button = new Gpio(4, 'in', 'both');

led.writeSync(1);
 
// button.watch(function(err, value) {
// });
// const Reader = require('./lib/gpio/reader')
// const reader = new Reader(14);

// reader.on()
//     .then((value) => {
//         console.log(value);
//     })

// reader.pin.writeSync(true);


