const functions = require("../src/app.js");

describe("app", () => {
  it("works correctly when we enter the right values", () => {
    expect(functions.move("5 5", "1 2 N", "LMLMLMLMM")).toBe("1 3 N");
    expect(functions.move("3 2", "0 2 S", "LMLMRMM")).toBe("3 2 E");
  });

  it("works correctly when we enter the wrong values", () => {
    expect(functions.move("5 5", "6 2 N", "LMLMLMLMM")).toBe("Sorry, you enter the wrong values");
    expect(functions.move("5 5", "1 2 L", "LMLMLMLMM")).toBe("Sorry, you enter the wrong values");
    expect(functions.move("5 5", "1 2 S", "LMLMLMTMM")).toBe("Sorry, you enter the wrong values");
  });
});
