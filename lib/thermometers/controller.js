const Gpio = require('onoff').Gpio;

const Probe = require('./probe');

class ControlProbe extends Probe {
    constructor(thermometerPin, fanPin, setTemp) {
        super(thermometerPin);

        this.fan = new Gpio(fanPin, 'out', 'both');
        this.setTemp = setTemp;

        this
            .start()
            .on('value', (temp) => {
                if (temp < this.setTemp) {
                    console.log('time to stoke');
                    this.stoke();
                } else { 
                    this.stoke(false);
                }
            });
    }

    stoke(on = true) {
        console.log(`stoking: ${on}`)
        if (on) {
            this.fan.writeSync(1);
        } else {
            this.fan.writeSync(0);
        }
    }    
}

module.exports = ControlProbe;