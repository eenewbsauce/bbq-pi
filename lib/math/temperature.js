class Temperature {
    static convertTimeToFarenheit(time) {
        return (282.23 * (Math.E ** (-0.028 * time))).toFixed(1);
    }
}

module.exports = Temperature;