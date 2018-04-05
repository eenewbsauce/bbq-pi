class Temperature {
    static convertTimeToFarenheit(time) {
        // return (282.23 * (Math.E ** (-0.028 * time))).toFixed(1);

        return (274 + (-8.23 * time) + (0.142 * (time ** 2)) + (-1.07 * (Math.E ** (-3 ** 3)))).toFixed(1);
    }
}

module.exports = Temperature;