export const input2passports = (input: string): string[] => input
  .split('\n\n')
  .map(passport => passport.replace(/\n/g, ' '))