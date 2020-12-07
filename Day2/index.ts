export const input2lines = (input: string): string[] => input.split("\n");

export const isValid = (line: string): boolean => {
  const [range, required, password] = line.split(" ");
  const [min, max] = range.split("-");

  let count = 0;
  for (const char of password) {
    if (char === required.charAt(0)) count++;
  }

  return count >= +min && count <= +max;
};
