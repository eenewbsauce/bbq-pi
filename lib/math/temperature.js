class Temperature {
    static convertTimeToFarenheit(time) {
        return 282.23 ** (Math.E * (-0.028 * time));
    }
}

module.exports = Temperature;