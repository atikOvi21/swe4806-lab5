function pow(x, n) {
    return Math.pow(x, n);
}

function modulo(a, b) {
    return a % b;
}

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

const advancedCalculator = {
    pow,
    modulo,
    gcd,
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = advancedCalculator;
} else {
    window.advanced = advancedCalculator;
}
