export const getRowNumber = (row: string): number => {
  let rowNumber = 0
  let rows = 64
  for (let i = 0; i < 7; i++, rows /= 2) {
    if (row[i] === 'B') rowNumber += rows
  }
  return rowNumber
}

export const getColumnNumber = (column: string): number => {
  let columnNumber = 0
  let columns = 4
  for (let i = 0; i < 3; i++, columns /= 2) {
    if (column[i] === 'R') columnNumber += columns
  }
  return columnNumber
}

export const getSeatId = (seat: string): number =>
  getRowNumber(seat.slice(0, 7)) * 8 + getColumnNumber(seat.slice(7))

