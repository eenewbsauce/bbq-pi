'use strict';

const { ControlProbe, Probe } = require('./lib/thermometers');

const thermometer1 = new Probe(5);

thermometer1
    .start()
    .on(`value`, (temp) => {
        console.log(`temp 1: ${ temp } F`);
    });

const fan = new ControlProbe(6, 12, 60);

fan
    .on(`value`, (temp) => {
        console.log(`temp 2: ${ temp } F`);
    });

