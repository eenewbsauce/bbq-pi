const onoff = require('onoff').Gpio;

class Gpio {
    constructor(number, direction) {
        this.pin = new onoff(number, direction);      
    }
}

module.exports = Gpio;
