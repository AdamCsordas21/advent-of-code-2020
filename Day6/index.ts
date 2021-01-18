// 26 yes-or-no questions marked from A-Z

export type Group = string
export type UniqueAnswers = string

export const input2groups = (input: string): Group[] => input.split('\n\n')

export const groups2UniqueYesAnswers = (input: Group): UniqueAnswers => {
  let ans: UniqueAnswers = ''
  for (const char of input) {
    if (char !== '\n' && !ans.includes(char)) ans += char
  }
  return ans
}

export const countUniqueYesAnswers = (input: UniqueAnswers): number => input.length

export const sum = (numbers: number[]): number => numbers.reduce((acc, number) => acc + number)

export const sumUniqueAnswersAcrossGroups = (input: string): number => {
  // 3+3+3+1+1 -> this suggests that we need to split the input into groups
  const groups = input2groups(input)
  // group with multiple people
  // groups   u ans   count
  // a b c -> abc   => 3 
  // ab ab -> ab    => 2 
  // ab bc -> abc   => 3 
  // ab cd -> abcd  => 4 

  // [ 'abc', 'a\nb\nc', 'ab\nac', 'a\na\na\na', 'b' ] -> 3+3+3+1+1
  const uniqueAnswersPerGroup: UniqueAnswers[] = groups.map(groups2UniqueYesAnswers)
  // 'abc' -> 3; 'a\nb\nc' -> 3;...
  // [ 'abc', 'abc', 'abc', 'a', 'b' ] -> [ 3, 3, 3, 1, 1 ]
  const countOfUniqueAnswersPerGroup: number[] = uniqueAnswersPerGroup.map(countUniqueYesAnswers)

  // [ 3, 3, 3, 1, 1 ] -> 3+3+3+1+1 = 11
  const result = sum(countOfUniqueAnswersPerGroup)
  
  return result
}
