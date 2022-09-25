import { GraphSearchFn } from "../graph";

export const hasPath = <TNode extends string | number | symbol>(
  graph: Record<TNode, TNode[]>,
  startingNode: TNode,
  nodeToFind: TNode,
  searchStrategy: GraphSearchFn
): boolean => {
  const reachableNodes = searchStrategy(graph, startingNode);
  console.log(`reachableNodes: ${reachableNodes}`);
  return reachableNodes.find((node) => node === nodeToFind) !== undefined;
};
