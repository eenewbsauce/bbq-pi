// const Gpio = require('onoff').Gpio;
// led = new Gpio(14, 'out');
// button = new Gpio(4, 'in', 'both');
 
// button.watch(function(err, value) {
//   led.writeSync(value);
// });
const Reader = require('./lib/gpio/reader')
const reader = new Reader(14);

reader.on()
    .then((value) => {
        console.log(value);
    })

reader.pin.writeSync(true);


