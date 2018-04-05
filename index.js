'use strict';

const Probe = require('./lib/thermometers').Probe;
const { temperature } = require('./lib/math');

const thermometer1 = new Probe(5);

thermometer1
    .start()
    .on(`value`, (time) => {
        console.log(`temp 1: ${ temperature.convertTimeToFarenheit(time) } F`);
    });

const thermometer2 = new Probe(6);

thermometer2
    .start()
    .on(`value`, (time) => {
        console.log(`temp 2: ${ temperature.convertTimeToFarenheit(time) } F`);
    });
