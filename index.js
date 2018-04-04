'use strict';

const Probe = require('./lib/thermometers').Probe;

const thermometer1 = new Probe(5);

thermometer1
    .start()
    .on(`5:value`, (value) => {
        console.log(value)
    });
