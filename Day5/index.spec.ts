import {
  getColumnNumber,
  getColumnNumber2,
  getRowNumber,
  getRowNumber2,
  getRowNumber3,
  getSeatId,
  getSeatIdBinary,
  getSeatIdRegex,
  getSeatIdRegex2,
} from '.'

describe('binary boarding', () => {
  it.each<[row: string, expected: number]>([
    ['FBFBBFF', 44],
    ['FFFFFFF', 0],
    ['BBBBBBB', 127],
  ])('calculates row number for %s => %s', (row, expected) => {
    expect(getRowNumber(row)).toEqual(expected)
    expect(getRowNumber2(row)).toEqual(expected)
    expect(getRowNumber3(row)).toEqual(expected)
  })

  it.each<[column: string, expected: number]>([
    ['RLR', 5],
    ['LLL', 0],
    ['RRR', 7],
  ])('calculates column number for %s => %s', (column, expected) => {
    expect(getColumnNumber(column)).toEqual(expected)
    expect(getColumnNumber2(column)).toEqual(expected)
  })
  
  it('calculates seat ID', () => {
    const seat = 'FBFBBFFRLR'
    const expected = 357
    expect(getSeatId(seat)).toEqual(expected)
    expect(getSeatIdBinary(seat)).toEqual(expected)
    expect(getSeatIdRegex(seat)).toEqual(expected)
    expect(getSeatIdRegex2(seat)).toEqual(expected)
  })
})
