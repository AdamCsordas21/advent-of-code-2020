import {
  countUniqueYesAnswers,
  Group,
  groups2UniqueYesAnswers,
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

  it('splits group into unique answers', () => {
    const input = 'abc\na'
    const expected = 'abc'

    /*
    let uniqueAnswers1 = []
    for (const c of input)
      if (c !== '\n' && !uniqueAnswers1.includes(c)) uniqueAnswers1.push(c)

    const x = new Set()
    for (const ans of input.split('').filter(c => c !== '\n'))
      x.add(ans)
    const a1 = [...x]

    let uniqueAnswers2 = ''
    for (const c of input)
      if (c !== '\n' && !uniqueAnswers2.includes(c)) uniqueAnswers2 += c
   

    const nonUnique = input.split('') // ['a', 'b', 'c', '\n', 'a']
      .filter(c => c !== '\n') // ['a', 'b', 'c', 'a']
    const a = [...new Set(nonUnique)]
*/

expect(groups2UniqueYesAnswers(input)).toEqual(expected)
  })

  it.skip('counts unique yes answers in a group', () => {
    const input = 'abc'
    const expected = 3
    expect(countUniqueYesAnswers(input)).toEqual(expected)
  })

  it.skip('part 1', () => {
    expect(sumUniqueAnswersAcrossGroups(input)).toEqual(11)
  })
})
