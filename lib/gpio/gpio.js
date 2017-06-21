const onoff = require('onoff').Gpio;

class Gpio {
    constructor(number, direction) {
        this.pin = new Gpio(number, direction);      
    }
}

module.exports = Gpio;