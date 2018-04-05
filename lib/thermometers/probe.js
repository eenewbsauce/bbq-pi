'use strict';

const Gpio = require('onoff').Gpio;
const EventEmitter = require('events');

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
            this.startTime = Date.now('nano');
            this.isHigh = false;
            this.probe.setDirection('in');

            while (!this.isHigh) {
                this.isHigh = this.probe.readSync();

                if (this.isHigh) {
                    this.endTime = Date.now('nano');
                }
            }

            const timeDiff = this.endTime - this.startTime;

            this.emit('value', timeDiff);

            this.probe.setDirection('out');
            this.probe.writeSync(0);
        }, 4000);

        return this;
    }
}

module.exports = Probe;
