import { dfsRecursive, dfsRightToLeft } from "./dfs";
import { undirectedNumberGraph } from "../graph";

describe("dfsRecursive should", () => {
  test("return null for empty graph", () => {
    const nodes = dfsRecursive<string>({}, "");
    expect(nodes).toStrictEqual([]);
  });

  test("return null for invalid starting node", () => {
    const nodes = dfsRecursive<string>({ valid: [] }, "invalid");
    expect(nodes).toStrictEqual([]);
  });

  test("return the starting node for graphs with one node", () => {
    const nodes = dfsRecursive<string>({ valid: [] }, "valid");
    expect(nodes).toStrictEqual(["valid"]);
  });

  test("dfs", () => {
    const nodes = dfsRecursive(undirectedNumberGraph, 1, []);
    expect(nodes).toStrictEqual([1, 2, 4, 3, 5, 6, 7]);
  });
});

describe("dfsRightToLeft should", () => {
  test("return null for empty graph", () => {
    const nodes = dfsRightToLeft<string>({}, "");
    expect(nodes).toStrictEqual([]);
  });

  test("return null for invalid starting node", () => {
    const nodes = dfsRightToLeft<string>({ valid: [] }, "invalid");
    expect(nodes).toStrictEqual([]);
  });

  test("return the starting node for graphs with one node", () => {
    const nodes = dfsRecursive<string>({ valid: [] }, "valid");
    expect(nodes).toStrictEqual(["valid"]);
  });

  test("dfs", () => {
    const nodes = dfsRightToLeft(undirectedNumberGraph, 1);
    expect(nodes).toStrictEqual([1, 3, 7, 6, 5, 2, 4]);
  });
});
