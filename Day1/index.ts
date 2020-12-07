export const find2020 = (input: number[]): [number, number] => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const first = input[i];
      const second = input[j];
      if (first + second === 2020) return [first, second];
    }
  }
  return [0, 0];
};

export const find2020of3 = (input: number[]): [number, number, number] => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      for (let k = j + 1; k < input.length; k++) {
        const first = input[i];
        const second = input[j];
        const third = input[k];
        if (first + second + third === 2020) return [first, second, third];
      }
    }
  }
  return [0, 0, 0];
};

