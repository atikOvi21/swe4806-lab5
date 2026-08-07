let basic, advanced;

if (typeof module !== "undefined" && module.exports) {
    basic = require("./basic");
    advanced = require("./advanced");
} else {
    basic = window.basic;
    advanced = window.advanced;
}

function compoundInterest(principal, ratePercent, time) {
    if (![principal, ratePercent, time].every((value) => Number.isFinite(value))) {
        return { amount: 0, interest: 0 };
    }

    const rateDecimal = basic.divide(ratePercent, 100);
    const base = basic.add(1, rateDecimal);
    const growth = advanced.pow(base, time);
    const amount = basic.multiply(principal, growth);
    const interest = basic.subtract(amount, principal);
    return { amount, interest };
}

const customCalculator = {
    compoundInterest,
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = customCalculator;
} else {
    window.custom = customCalculator;
}
