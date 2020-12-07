import { find2020 } from ".";

describe("finds 2020", () => {
  it("finds 2 numbers that add up to 2020", () => {
    const input = [123, 1010, 20, 30, 2000];

    expect(find2020(input)).toEqual([20, 2000]);
  });
});
