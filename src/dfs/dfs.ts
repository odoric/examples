export const dfsRightToLeft = <TNode extends string | number | symbol>(
  graph: Record<TNode, TNode[]>,
  startingNode: TNode
): TNode[] => {
  // Handle empty graph
  if (graph == null || graph === {} || graph[startingNode] == null) {
    return [];
  }

  const result: TNode[] = [];
  let queue: TNode[] = [startingNode];
  while (queue.length > 0) {
    let currentNode = queue.pop();
    if (currentNode != null) {
      result.push(currentNode);
      graph[currentNode].forEach((child) => {
        queue.push(child);
      });
    }
  }
  return result;
};

export const dfsRecursive = <TNode extends string | number | symbol>(
  graph: Record<TNode, TNode[]>,
  startingNode: TNode,
  resultSoFar: TNode[] = []
): TNode[] => {
  // Handle empty graph
  if (graph == null || graph === {} || graph[startingNode] == null) {
    return resultSoFar;
  }

  // Add this node to the result
  resultSoFar.push(startingNode);

  // Now call this function for each child
  graph[startingNode].forEach((child) => {
    resultSoFar = dfsRecursive(graph, child, resultSoFar);
  });
  return resultSoFar;
};
