const basic = require("../Scripts/basic");
const advanced = require("../Scripts/advanced");
const custom = require("../Scripts/custom");

describe("Compound Interest - Unit Test (isolated with stubs)", () => {
  test("wires stubbed dependency outputs into the correct final result", () => {
    const divideStub = jest.spyOn(basic, "divide").mockReturnValue(0.1);
    const addStub = jest.spyOn(basic, "add").mockReturnValue(1.1);
    const powStub = jest.spyOn(advanced, "pow").mockReturnValue(2);
    const multiplyStub = jest.spyOn(basic, "multiply").mockReturnValue(2000);
    const subtractStub = jest.spyOn(basic, "subtract").mockReturnValue(1000);

    const result = custom.compoundInterest(1000, 10, 2);

    expect(divideStub).toHaveBeenCalledWith(10, 100);
    expect(addStub).toHaveBeenCalledWith(1, 0.1);
    expect(powStub).toHaveBeenCalledWith(1.1, 2);
    expect(multiplyStub).toHaveBeenCalledWith(1000, 2);
    expect(subtractStub).toHaveBeenCalledWith(2000, 1000);
    expect(result).toEqual({ amount: 2000, interest: 1000 });

    divideStub.mockRestore();
    addStub.mockRestore();
    powStub.mockRestore();
    multiplyStub.mockRestore();
    subtractStub.mockRestore();
  });
});

describe("Compound Interest - Boundary Input", () => {
  test("principal=0 produces zero amount and interest", () => {
    const result = custom.compoundInterest(0, 10, 2);
    expect(result.amount).toBe(0);
    expect(result.interest).toBe(0);
  });

  test("rate=0 produces no interest", () => {
    const result = custom.compoundInterest(1000, 0, 2);
    expect(result.amount).toBe(1000);
    expect(result.interest).toBe(0);
  });

  test("time=0 produces principal amount and zero interest", () => {
    const result = custom.compoundInterest(1000, 10, 0);
    expect(result.amount).toBe(1000);
    expect(result.interest).toBe(0);
  });
});

describe("Compound Interest - Invalid Input", () => {
  test("non-numeric input returns zero values", () => {
    const result = custom.compoundInterest(NaN, 10, 2);
    expect(result.amount).toBe(0);
    expect(result.interest).toBe(0);
  });
});

describe("Integration Test", () => {
  test("compoundInterest should use both basic and advanced modules with correct arguments", () => {
    const addSpy = jest.spyOn(basic, "add");
    const divideSpy = jest.spyOn(basic, "divide");
    const multiplySpy = jest.spyOn(basic, "multiply");
    const subtractSpy = jest.spyOn(basic, "subtract");
    const powSpy = jest.spyOn(advanced, "pow");

    const result = custom.compoundInterest(1000, 10, 2);

    expect(divideSpy).toHaveBeenCalledWith(10, 100);
    expect(addSpy).toHaveBeenCalled();
    expect(powSpy).toHaveBeenCalledWith(1.1, 2);
    expect(multiplySpy).toHaveBeenCalled();
    expect(subtractSpy).toHaveBeenCalled();
    expect(result.amount).toBeCloseTo(1210);
    expect(result.interest).toBeCloseTo(210);

    addSpy.mockRestore();
    divideSpy.mockRestore();
    multiplySpy.mockRestore();
    subtractSpy.mockRestore();
    powSpy.mockRestore();
  });
});
