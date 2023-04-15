const functions = require("../changeDirection.js");

describe("changeDirection", () => {
  it("works correctly when we need to turn left", () => {
    expect(functions.changeDirection(1, "L")).toBe(0);
    expect(functions.changeDirection(0, "L")).toBe(3);
  });

  it("works correctly when we need to turn right", () => {
    expect(functions.changeDirection(1, "R")).toBe(2);
    expect(functions.changeDirection(3, "R")).toBe(0);
  });

  it("works correctly when we input incorrect values", () => {
    expect(functions.changeDirection(6, "L")).toBe(undefined);
    expect(functions.changeDirection(6, "R")).toBe(undefined);
    expect(functions.changeDirection(2, "M")).toBe(undefined);
  });
});
