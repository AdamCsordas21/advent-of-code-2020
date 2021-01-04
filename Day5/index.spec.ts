import {
  getColumnNumber,
  getRowNumber,
} from '.'

describe('binary boarding', () => {
  it.each<[row: string, expected: number]>([
    ['FBFBBFF', 44],
    ['FFFFFFF', 0],
    ['BBBBBBB', 127],
  ])('calculates row number for %s => %s', (row, expected) => {
    expect(getRowNumber(row)).toEqual(expected)
  })

  it.each<[column: string, expected: number]>([
    ['RLR', 5],
    ['LLL', 0],
    ['RRR', 7],
  ])('calculates column number for %s => %s', (column, expected) => {
    expect(getColumnNumber(column)).toEqual(expected)
  })
})