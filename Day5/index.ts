export const getRowNumber = (row: string): number => {
  let rowNumber = 0
  let rows = 64
  for (let i = 0; i < 7; i++, rows /= 2) {
    if (row[i] === 'B') rowNumber += rows
  }
  return rowNumber
}
