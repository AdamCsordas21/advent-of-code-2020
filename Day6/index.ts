// 26 yes-or-no questions marked from A-Z

export type Group = string
export const input2groups = (input: string): Group[] => {
  return input.split('\n\n')
}

export const sumUniqueAnswersAcrossGroups = (input: string): number => {
  // 3+3+3+1+1 -> this suggests that we need to split the input into groups
  const groups = input2groups(input)
  return 0
}