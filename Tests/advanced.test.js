const calculator = require("../Scripts/advanced");

describe('Pow', () => {
    var data = [
        [2, 3, 8],
        [5, 2, 25],
        [3, 0, 1],
        [10, 1, 10],
        [2, -1, 0.5],
        [-2, 2, 4]
    ];
    describe.each(data)('pow(%i, %i), Expected: %f', (x, n, expected) => {
        test(`returns ${calculator.pow(x, n)}`, () => {
            expect(calculator.pow(x, n)).toBe(expected);
        });
    });
});

describe('Modulo', () => {
    var data = [
        [10, 3, 1],
        [9, 3, 0],
        [-10, 3, -1],
        [10, -3, 1],
        [7, 2, 1]
    ];
    describe.each(data)('modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.modulo(a, b)}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    });
});

describe('GCD', () => {
    var data = [
        [12, 18, 6],
        [17, 5, 1],
        [0, 5, 5],
        [5, 0, 5],
        [-12, 18, 6],
        [100, 75, 25]
    ];
    describe.each(data)('gcd(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.gcd(a, b)}`, () => {
            expect(calculator.gcd(a, b)).toBe(expected);
        });
    });
});
