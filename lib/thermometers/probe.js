'use strict';

const Gpio = require('onoff').Gpio;
const EventEmitter = require('events');

const { temperature } = require('../math');

class Probe extends EventEmitter {
    constructor(pin = 5) {
        super();

        this.pin = pin;
        this.probe = new Gpio(pin, 'low', 'both');
        this.isHigh = false;
        this.endTime;
        this.startTime;
    }

    start() {
        setInterval(() => {
            this.startTime = Date.now();
            this.isHigh = false;
            this.probe.setDirection('in');

            while (!this.isHigh) {
                this.isHigh = this.probe.readSync();

                if (this.isHigh) {
                    this.endTime = Date.now();
                }
            }

            const timeDiff = this.endTime - this.startTime;

            this.emit('value', temperature.convertTimeToFarenheit(timeDiff));

            this.probe.setDirection('out');
            this.probe.writeSync(0);
        }, 2000);

        return this;
    }
}

module.exports = Probe;
