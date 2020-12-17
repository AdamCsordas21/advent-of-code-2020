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
export const checkForRequiredFields = (passport: string): boolean =>
  requiredFields
    .map(requiredField => passport.split(' ').map(field => field.substring(0, 3)).includes(requiredField))
    .filter(f => !!f)
    .length === requiredFields.length

export const countPassportsWithRequiredFields = (input: string): number => input2passports(input)
  .map(p => checkForRequiredFields(p))
  .filter(p => !!p)
  .length

const extract = (field: string) => (passport: string): string => passport.split(' ')
  .find(keyValue => keyValue.startsWith(field))
  .slice(4)

export const extractByr = extract('byr')

export const extractIyr = extract('iyr')

export const extractEyr = extract('eyr')

export const extractHgt = extract('hgt')

const inRange = (min: number, max: number) => (input: number) => input >= min && input <= max

export const isValidByr = inRange(1920, 2002)

export const isValidIyr = inRange(2010, 2020)

export const isValidEyr = inRange(2020, 2030)

const isValidHgtCm = inRange(150, 193)

const isValidHgtIn = inRange(59, 76)

export const isValidHgt = (hgt: string): boolean => {
  const height = +hgt.slice(0, -2)
  const unit = hgt.slice(-2)
  if (unit === 'cm') {
    return isValidHgtCm(height)
  }
  if (unit === 'in') {
    return isValidHgtIn(height)
  }
  return false
}

export const validateFields = (passport: string): boolean => {
  if (!checkForRequiredFields(passport)) {
    return false
  }
  if (!isValidByr(+extractByr(passport))) {
    return false
  }
  if (!isValidIyr(+extractIyr(passport))) {
    return false
  }
  if (!isValidEyr(+extractEyr(passport))) {
    return false
  }
  if (!isValidHgt(extractHgt(passport))) {
    return false
  }
  return true
}
