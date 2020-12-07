export const find2020 = (input: number[]): [number, number] => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      const first = input[i];
      const second = input[j];
      if (i !== j && first + second === 2020) return [first, second];
    }
  }
  return [0, 0];
};
