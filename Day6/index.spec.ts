import {
  Group,
  input2groups,
  sumUniqueAnswersAcrossGroups,
} from '.'

describe('task', () => {
  const input = `abc

a
b
c

ab
ac

a
a
a
a

b`

  it('splits input into groups', () => {
    const expected: Group[] = [
      'abc',
      'a\nb\nc',
      'ab\nac',
      'a\na\na\na',
      'b'
    ]
    expect(input2groups(input)).toEqual(expected)
  })

  it.skip('part 1', () => {
    expect(sumUniqueAnswersAcrossGroups(input)).toEqual(11)
  })
})
