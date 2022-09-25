export const bfs = <TNode extends string | number | symbol>(
  graph: Record<TNode, TNode[]>,
  startingNode: TNode
): TNode[] => {
  // Handle empty graph
  if (graph == null || graph === {} || graph[startingNode] == null) {
    return [];
  }

  let queue: TNode[] = [];
  let queueIdx = 0;
  queue.push(startingNode);
  let current = graph[queue[queueIdx]];

  while (current != null) {
    current.forEach((curr) => {
      queue.push(curr);
    });
    queueIdx++;
    current = graph[queue[queueIdx]];
  }
  return queue;
};
