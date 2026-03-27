import { describe, it, expect } from "vitest";
import { calculateWinner } from "../App";  // <== Fix this import

describe("calculateWinner", () => {
  it("should return 'X' when X wins", () => {
    const board = ["X", "X", "X", null, "O", "O", null, null, null];
    expect(calculateWinner(board)).toBe("X");
  });

  it("should return 'O' when O wins", () => {
    const board = ["O", "O", "O", "X", null, "X", null, null, null];
    expect(calculateWinner(board)).toBe("O");
  });

  it("should return null when there is no winner", () => {
    const board = ["X", "O", "X", "O", "X", "X", "O", "X", "O"];
    expect(calculateWinner(board)).toBe(null);
  });

  it("should return null for an empty board", () => {
    const board = Array(9).fill(null);
    expect(calculateWinner(board)).toBe(null);
  });
});
