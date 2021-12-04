import { test, puzzle } from "./input.js";
import _ from "lodash";

const input = puzzle;
const numbers = input[0].split(",").map((i) => parseInt(i, 10));
const createBoards = (input) =>
  _.chunk(
    input.map((l) =>
      l
        .split(" ")
        .filter((l) => !!l) //remove empties
        .map((l) => ({ matched: false, v: parseInt(l, 10) }))
    ),
    5
  );
const boards = createBoards(input.slice(2).filter((line) => !!line));
const check = (boards) => {
  const checkInner = (row) => row.every((r) => r.matched);

  for (const board of boards) {
    for (const row of board) {
      if (checkInner(row)) return board;
    }
    for (let i = 0; i < 5; i++) {
      if (checkInner(board.map((r) => r[i]))) return board;
    }
  }
  return false;
};
const match = (boards, val) => {
  boards.forEach((board) => {
    board.forEach((row) => {
      row.forEach((item) => {
        console.log(item.v, val);
        if (item.v === val) {
          item.matched = true;
        }
      });
    });
  });
};

numbers.every((n) => {
  match(boards, n);
  const matchingBoard = check(boards);
  if (matchingBoard) {
    const unmatched = matchingBoard
      .flatMap((r) => r.map((i) => i))
      .filter((i) => !i.matched)
      .reduce((p, c) => p + c.v, 0);

    console.log({ answer: unmatched * n });
    return false;
  }
  return true;
});
