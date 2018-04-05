'use strict';

const Probe = require('./lib/thermometers').Probe;

const thermometer1 = new Probe(5);

thermometer1
    .start()
    .on(`value`, (value) => {
        console.log(`therm 1: ${value}`);
    });

const thermometer2 = new Probe(6);

thermometer2
    .start()
    .on(`value`, (value) => {
        console.log(`therm 2: ${value}`);
    });
