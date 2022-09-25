export const undirectedNumberGraph: Record<number, number[]> = {
  1: [2, 3],
  2: [4],
  3: [5, 6, 7],
  4: [],
  5: [],
  6: [],
  7: []
};

export const directedNumberGraphWithTwoRoots: Record<number, number[]> = {
  1: [2, 3],
  2: [4],
  3: [5, 6],
  4: [],
  5: [],
  6: [],
  7: [8, 9, 10],
  8: [],
  9: [6],
  10: []
};

export type GraphSearchFn = <TNode extends string | number | symbol>(
  graph: Record<TNode, TNode[]>,
  startingNode: TNode
) => TNode[];
