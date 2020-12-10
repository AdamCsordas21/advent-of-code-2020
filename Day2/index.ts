export const input2lines = (input: string): string[] => input.split('\n')

export const isValid = (line: string): boolean => {
  const [range, required, password] = line.split(' ')
  const [min, max] = range.split('-')

  let count = 0
  for (const char of password) {
    if (char === required.charAt(0)) count++
  }

  return count >= +min && count <= +max
}

export const isValid2 = (line: string): boolean => {
  const [positions, required, password] = line.split(' ')
  const [p1, p2] = positions.split('-')

  const m1 = required.charAt(0) === password.charAt(+p1 - 1)
  const m2 = required.charAt(0) === password.charAt(+p2 - 1)
  return m1 !== m2;
}

export const validPasswords = (input: string): number => input2lines(input).map(isValid).filter(v => v).length

export const validPasswords2 = (input: string): number => input2lines(input).map(isValid2).filter(v => v).length
