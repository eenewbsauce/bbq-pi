const Gpio = require('onoff').Gpio;

const probe = new Gpio(5, 'low');
let isHigh = false;
let startTime = new Date().getTime();
let endTime;

setInterval(() => {
    probe.setDirection('in');

    while (!isHigh) {
        isHigh = probe.readSync();

        if (isHigh) {
            endTime = new Date().getTime();
        }
    }

    console.log(endTime - startTime); // ms

    probe.direction('low');

}, 100);



