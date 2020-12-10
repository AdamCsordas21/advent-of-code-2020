export const input2rows = (input: string): string[] => input.split('\n')

export const isTreeAt = (row: string, column: number): boolean => row[column % row.length] === '#'

export const countTrees = (input: string): number => input2rows(input)
  .map((row, index) => isTreeAt(row, index * 3))
  .filter(v => !!v).length
