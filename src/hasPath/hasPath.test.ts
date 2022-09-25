import { directedNumberGraphWithTwoRoots } from "../graph";
import { hasPath } from "./hasPath";
import { bfs } from "../bfs";
import { dfsRightToLeft, dfsRecursive } from "../dfs";

describe("hasPath should", () => {
  describe("with bfs", () => {
    test("return true for reachable node", () => {
      const result = hasPath(directedNumberGraphWithTwoRoots, 1, 6, bfs);
      expect(result).toStrictEqual(true);
    });
    test("return false for unreachable node", () => {
      const result = hasPath(directedNumberGraphWithTwoRoots, 7, 4, bfs);
      expect(result).toStrictEqual(false);
    });
  });
  describe("with dfsRightToLeft", () => {
    test("return true for reachable node", () => {
      const result = hasPath(
        directedNumberGraphWithTwoRoots,
        1,
        6,
        dfsRightToLeft
      );
      expect(result).toStrictEqual(true);
    });
    test("return false for unreachable node", () => {
      const result = hasPath(
        directedNumberGraphWithTwoRoots,
        7,
        4,
        dfsRightToLeft
      );
      expect(result).toStrictEqual(false);
    });
  });
  describe("with dfsRecursive", () => {
    test("return true for reachable node", () => {
      const result = hasPath(
        directedNumberGraphWithTwoRoots,
        1,
        6,
        dfsRecursive
      );
      expect(result).toStrictEqual(true);
    });
    test("return false for unreachable node", () => {
      const result = hasPath(
        directedNumberGraphWithTwoRoots,
        7,
        4,
        dfsRecursive
      );
      expect(result).toStrictEqual(false);
    });
  });
});
