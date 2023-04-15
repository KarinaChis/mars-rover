const functions = require("../changePosition.js");

describe("changePosition", () => {
  it("works correctly when we inside borders", () => {
    expect(functions.changePosition([1, 1], "N", 5, 5)).toStrictEqual([1, 2]);
    expect(functions.changePosition([1, 1], "S", 5, 5)).toStrictEqual([1, 0]);
    expect(functions.changePosition([1, 1], "W", 5, 5)).toStrictEqual([0, 1]);
    expect(functions.changePosition([1, 1], "E", 5, 5)).toStrictEqual([2, 1]);
  });

  it("works correctly when we try to go outside borders", () => {
    expect(functions.changePosition([1, 5], "N", 5, 5)).toStrictEqual([1, 5]);
    expect(functions.changePosition([1, 0], "S", 5, 5)).toStrictEqual([1, 0]);
    expect(functions.changePosition([0, 1], "W", 5, 5)).toStrictEqual([0, 1]);
    expect(functions.changePosition([5, 1], "E", 5, 5)).toStrictEqual([5, 1]);
  });
});
