describe(" monthly rate test ", function () {
  it("should calculate the monthly rate correctly", function () {
    expect(
      calculateMonthlyPayment({ amount: 1000, years: 3, rate: 1.22 })
    ).toEqual("104.88");
    expect(
      calculateMonthlyPayment({ amount: 10000, years: 3, rate: 3.22 })
    ).toEqual("2683.85");
  });
});
describe("return 2 decimal place", function () {
  it("should return a result with 2 decimal places", function () {
    expect(
      calculateMonthlyPayment({ amount: 1000, years: 3, rate: 1.22 })
    ).toBeCloseTo("104.88", 2);
    expect(
      calculateMonthlyPayment({ amount: 10000, years: 3, rate: 3.22 })
    ).toBeCloseTo("2683.85", 2);
  });
});

describe("not to contain string", function () {
  it("should not contain a string value", function () {
    expect(
      calculateMonthlyPayment({ amount: 1000, years: 3, rate: 1.22 })
    ).not.toContain(String);
  });
});
describe("to return NaN", function () {
  it("it should return NaN", function () {
    expect(calculateMonthlyPayment({ amount: 0, years: 0, rate: 0 })).toEqual(
      "NaN"
    );
  });
});
