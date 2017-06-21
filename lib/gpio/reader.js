const Gpio = require('./gpio');

class Reader extends Gpio {
    constructor(pinNum) {
        super({
            number: pinNum,
            direction: 'in'
        });
    }

    

    on() {
        return new Promise((resolve, reject) => {
            this.pin.watch((err, value) => {
                if (err) {
                    return reject(err);
                }

                return resolve(value);
            });
        });
    }
}

module.exports = Reader;