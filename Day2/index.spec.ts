import { input2lines } from ".";

describe("validate password", () => {
  it("validates password", () => {
    const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

    expect(input2lines(input)).toEqual([
      '1-3 a: abcde',
      '1-3 b: cdefg',
      '2-9 c: ccccccccc',
    ]);
  });
});
