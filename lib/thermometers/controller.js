const Gpio = require('onoff').Gpio;

const Probe = require('./probe');

class ControlProbe extends Probe {
    constructor(thermometerPin, fanPin, setTemp) {
        super(thermometerPin);

        this.fan = new Gpio(fanPin, 'low');

        this
            .start()
            .on('value', (temp) => {
                if (temp < setTemp) {
                    this.stoke();
                } else { 
                    this.stoke(false);
                }
            });
    }

    stoke(on = true) {
        if (on) {
            this.fan.writeSync(1);
        } else {
            this.fan.writeSync(0);
        }
    }    
}

module.exports = ControlProbe;