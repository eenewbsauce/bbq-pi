'use strict';

const Gpio = require('onoff').Gpio;

const probe = new Gpio(5, 'low', 'rising');
let isHigh = false;
let startTime;
let endTime;

setInterval(() => {
    startTime = new Date();
    isHigh = false;
    probe.setDirection('in');

    while (!isHigh) {
        isHigh = probe.readSync();

        if (isHigh) {
            endTime = new Date();
        }
    }

    console.log(endTime - startTime); // ms

    probe.setDirection('out');
    probe.writeSync(0);

}, 4000);



