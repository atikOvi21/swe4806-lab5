const calculator = require("../Scripts/basic");

describe('Add', () => {
    var BVAdata = [
        [1, 2, 3],
        [4, 5, 9],
        [3, 12, 15],
        [4, 6, 10]
    ];
    describe.each(BVAdata)('BVA: add(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.add(a, b)}`, () => {
            expect(calculator.add(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [0, 89, 89],
        [-17, -35, -52],
        [65, -12, 53],
        [-78, 24, -54]
    ];
    describe.each(DTdata)('DT: add(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.add(a, b)}`, () => {
            expect(calculator.add(a, b)).toBe(expected);
        });
    });
});

describe('Subtract', () => {
    var BVAdata = [
        [5, 2, 3],
        [10, 4, 6],
        [0, 0, 0],
        [1, 1, 0]
    ];
    describe.each(BVAdata)('BVA: subtract(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.subtract(a, b)}`, () => {
            expect(calculator.subtract(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [-5, -3, -2],
        [5, -3, 8],
        [-5, 3, -8],
        [100, 200, -100]
    ];
    describe.each(DTdata)('DT: subtract(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.subtract(a, b)}`, () => {
            expect(calculator.subtract(a, b)).toBe(expected);
        });
    });
});

describe('Multiply', () => {
    var BVAdata = [
        [2, 3, 6],
        [5, 5, 25],
        [1, 9, 9],
        [7, 8, 56]
    ];
    describe.each(BVAdata)('BVA: multiply(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.multiply(a, b)}`, () => {
            expect(calculator.multiply(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [0, 100, 0],
        [-4, 5, -20],
        [-4, -5, 20],
        [3, -6, -18]
    ];
    describe.each(DTdata)('DT: multiply(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.multiply(a, b)}`, () => {
            expect(calculator.multiply(a, b)).toBe(expected);
        });
    });
});

describe('Divide', () => {
    var BVAdata = [
        [6, 3, 2],
        [9, 3, 3],
        [10, 2, 5],
        [100, 4, 25]
    ];
    describe.each(BVAdata)('BVA: divide(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.divide(a, b)}`, () => {
            expect(calculator.divide(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [-10, 2, -5],
        [10, -2, -5],
        [-10, -2, 5],
        [7, 2, 3.5]
    ];
    describe.each(DTdata)('DT: divide(%i, %i), Expected: %f', (a, b, expected) => {
        test(`returns ${calculator.divide(a, b)}`, () => {
            expect(calculator.divide(a, b)).toBe(expected);
        });
    });

    test('divide by zero returns Infinity', () => {
        expect(calculator.divide(5, 0)).toBe(Infinity);
    });
});
