export const input2rows = (input: string): string[] => input.split('\n')

export const isTreeAt = (row: string, column: number): boolean => row[column % row.length] === '#'

export const countTrees = (input: string, down: number, right: number): number => input2rows(input)
  .reduce<number>((acc, row, index) => (index % down === 0 && isTreeAt(row, index / down * right)) ? acc + 1 : acc, 0)

export const multiplyTreesOnSlopes = (input: string, slopes: [down: number, right: number][]): number => slopes
  .map(([down, right]) => countTrees(input, down, right))
  .reduce((product, countOfTrees) => product * countOfTrees)
