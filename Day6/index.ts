// 26 yes-or-no questions marked from A-Z

export type Group = string
export type UniqueAnswers = string
export type AllAnswers = string

export const input2groups = (input: string): Group[] => input.split('\n\n')

export const groups2UniqueYesAnswers = (input: Group): UniqueAnswers => {
  let ans: UniqueAnswers = ''
  for (const char of input) {
    if (char !== '\n' && !ans.includes(char)) ans += char
  }
  return ans
}

type Person = string
export const group2people = (input: string): Person[] => input.split('\n')

export const groups2AllYesAnswers = (input: Group): AllAnswers => {
  let ans: AllAnswers = ''
  const people = group2people(input)
  for (const person of people) {
    for (const char of person) {
      // add char to ans if char is included in EACH of the people answers
      if (!ans.includes(char) && people.every(person => person.includes(char))) ans += char
    }
  }
  return ans
}

export const countUniqueYesAnswers = (input: UniqueAnswers): number => input.length

export const countAllYesAnswers = (input: AllAnswers): number => input.length

export const sum = (numbers: number[]): number => numbers.reduce((acc, number) => acc + number)

export const sumUniqueAnswersAcrossGroups = (input: string): number => {
  // 3+3+3+1+1 -> this suggests that we need to split the input into groups
  const groups = input2groups(input)
  // group with multiple people
  // groups   u ans   count
  // abc   -> abc   => 3
  // a b c -> abc   => 3
  // ab ab -> ab    => 2
  // ab bc -> abc   => 3
  // ab cd -> abcd  => 4

  // [ 'abc', 'a\nb\nc', 'ab\nac', 'a\na\na\na', 'b' ] -> [ 'abc', 'abc', 'abc', 'a', 'b' ]
  const uniqueAnswersPerGroup: UniqueAnswers[] = groups.map(groups2UniqueYesAnswers)
  // [ 'abc', 'abc', 'abc', 'a', 'b' ] -> [ 3, 3, 3, 1, 1 ]
  const countOfUniqueAnswersPerGroup: number[] = uniqueAnswersPerGroup.map(countUniqueYesAnswers)
  // [ 3, 3, 3, 1, 1 ] -> 3+3+3+1+1 = 11
  return sum(countOfUniqueAnswersPerGroup)
}

export const sumAllAnswersAcrossGroups = (input: string): number => {
  const groups = input2groups(input)
  // group with multiple people
  // groups  all ans   count
  // abc    -> abc   => 3
  // a b c  ->       => 0
  // ab ab  -> ab    => 2
  // ab bc  -> b     => 1
  // ab cd  ->       => 0
  // a a b  ->       => 0
  // a a a  -> a     => 1
  // a a ab -> a     => 1

  // [ 'abc', 'a\nb\nc', 'ab\nac', 'a\na\na\na', 'b' ] -> [ 'abc', 'abc', 'abc', 'a', 'b' ]
  const uniqueAnswersPerGroup: AllAnswers[] = groups.map(groups2AllYesAnswers)
  // [ 'abc', '', 'a', 'a', 'b' ] -> [ 3, 0, 1, 1, 1 ]
  const countOfAllYesAnswersPerGroup: number[] = uniqueAnswersPerGroup.map(countAllYesAnswers)
  // [ 3, 0, 1, 1, 1 ] -> 3+0+1+1+1 = 6
  return sum(countOfAllYesAnswersPerGroup)
}
