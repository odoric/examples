import { bfs } from "./bfs";
import { undirectedNumberGraph } from "../graph";

describe("bfs should", () => {
  test("return null for empty graph", () => {
    const nodes = bfs<string>({}, "");
    expect(nodes).toStrictEqual([]);
  });

  test("return null for invalid starting node", () => {
    const nodes = bfs<string>({ valid: [] }, "invalid");
    expect(nodes).toStrictEqual([]);
  });

  test("return the starting node for graphs with one node", () => {
    const nodes = bfs<string>({ valid: [] }, "valid");
    expect(nodes).toStrictEqual(["valid"]);
  });

  test("bfs", () => {
    const nodes = bfs(undirectedNumberGraph, 1);
    expect(nodes).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
