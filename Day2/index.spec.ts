import { input2lines, isValid } from ".";

describe("validate password", () => {
  it("splits input into lines", () => {
    const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

    expect(input2lines(input)).toEqual([
      "1-3 a: abcde",
      "1-3 b: cdefg",
      "2-9 c: ccccccccc",
    ]);
  });

  it.each<[string, boolean]>([
    ["1-3 a: abcde", true],
    ["1-3 b: cdefg", false],
    ["2-9 c: ccccccccc", true],
  ])("validates password %s => %s", (line, shouldBeValid) => {
    expect(isValid(line)).toEqual(shouldBeValid);
  });
});
