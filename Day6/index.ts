// 26 yes-or-no questions marked from A-Z

export type Group = string
export type UniqueAnswers = string

export const groups2UniqueYesAnswers = (input: Group): UniqueAnswers => {
  let ans: UniqueAnswers = ''
  for (const char of input) {
    if (char !== '\n' && !ans.includes(char)) ans += char
  }
  return ans
}

export const countUniqueYesAnswers = (input: Group): number => {
  return 0
}

export const input2groups = (input: string): Group[] => input.split('\n\n')

export const sumUniqueAnswersAcrossGroups = (input: string): number => {
  // 3+3+3+1+1 -> this suggests that we need to split the input into groups
  const groups = input2groups(input)
  // [ 'abc', 'a\nb\nc', 'ab\nac', 'a\na\na\na', 'b' ] -> 3+3+3+1+1
  // 'abc' -> 3; 'a\nb\nc' -> 3;...

  // group with multiple people
  // groups   u ans   count
  // a b c -> abc   => 3 
  // ab ab -> ab    => 2 
  // ab bc -> abc   => 3 
  // ab cd -> abcd  => 4 

  
  return 0
}