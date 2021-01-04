import {
  getRowNumber
} from '.'

describe('binary boarding', () => {
  it.each<[row: string, expected: number]>([
    ['FBFBBFF', 44],
    ['FFFFFFF', 0],
    ['BBBBBBB', 127],
  ])('calculates row number for %s => %s', (row, expected) => {
    expect(getRowNumber(row)).toEqual(expected)
  })
})