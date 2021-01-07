export const getRowNumber = (row: string): number => {
  let rowNumber = 0
  let rows = 64
  for (let i = 0; i < 7; i++, rows /= 2) {
    if (row[i] === 'B') rowNumber += rows
  }
  return rowNumber
}

export const getRowNumber2 = (row: string): number => {
  let rows = 128
  return row.split('').reduce((acc, c) => {
    rows /= 2
    return acc + (c === 'B' ? rows : 0)
  }, 0)
}

export const getRowNumber3 = (row: string): number =>
  parseInt(row.split('').map(c => c === 'F' ? '0' : '1').join(''), 2)

export const getColumnNumber = (column: string): number => {
  let columnNumber = 0
  let columns = 4
  for (let i = 0; i < 3; i++, columns /= 2) {
    if (column[i] === 'R') columnNumber += columns
  }
  return columnNumber
}

export const getColumnNumber2 = (column: string): number =>
  parseInt(column.split('').map(c => c === 'L' ? '0' : '1').join(''), 2)

export const getSeatId = (seat: string): number =>
  getRowNumber(seat.slice(0, 7)) * 8 + getColumnNumber(seat.slice(7))

export const getSeatIdBinary = (seat: string): number =>
  parseInt(seat.split('').map(c => ['F', 'L'].includes(c) ? '0' : '1').join(''), 2)

export const getSeatIdRegex = (seat: string): number =>
  parseInt(seat.replace(/[FL]/g, '0').replace(/[BR]/g, '1'), 2)

export const getSeatIdRegex2 = (seat: string): number =>
  parseInt(seat.replace(/./g, c => ['F', 'L'].includes(c) ? '0' : '1'), 2)

export const input2Seats = (input: string): string[] => input.split('\n')

export const findHighestSeatId = (input: string): number => Math.max(...input2Seats(input).map(getSeatId))
