export const input2passports = (input: string): string[] => input
  .split('\n\n')
  .map(passport => passport.replace(/\n/g, ' '))

const requiredFields = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid',
]
export const validateFields = (passport: string): boolean =>
  requiredFields
    .map(requiredField => passport.split(' ').map(field => field.substring(0, 3)).includes(requiredField))
    .filter(f => !!f)
    .length === requiredFields.length


export const countValidPassports = (input: string): number => input2passports(input)
  .map(p => validateFields(p))
  .filter(p => !!p)
  .length
