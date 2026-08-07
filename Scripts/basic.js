function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const basicCalculator = {
    add,
    subtract,
    multiply,
    divide,
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = basicCalculator;
} else {
    window.basic = basicCalculator;
}
