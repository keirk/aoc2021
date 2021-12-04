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
  ).map((b, i) => ({ rows: b, won: false, i }));
let boards = createBoards(input.slice(2).filter((line) => !!line));
const check = (board) => {
  const checkInner = (row) => row.every((r) => r.matched);
  for (const row of board.rows) {
    if (checkInner(row)) {
      board.won = true;
      return true;
    }
  }
  for (let i = 0; i < 5; i++) {
    if (checkInner(board.rows.map((r) => r[i]))) {
      board.won = true;
      return true;
    }
  }
  return false;
};
const matchBoard = (board, val) => {
  board.rows.forEach((row) => {
    row.forEach((item) => {
      if (item.v === val) {
        item.matched = true;
      }
    });
  });
  return board;
};

const winners = [];
const getUnmatchedSum = (board) => {
  return board.rows
    .flatMap((r) => r.map((i) => i))
    .filter((i) => !i.matched)
    .reduce((p, c) => p + c.v, 0);
};

numbers.every((n) => {
  // for every number, while some boards are not won
  // check each board for a winner
  // keep a list of winning boards
  boards
    .filter((b) => !b.won)
    .forEach((board) => {
      const winner = check(matchBoard(board, n));
      if (winner) {
        winners.push([board, n]);
      }
    });

  return boards.some((b) => !b.won);
});

const [last, n] = _.last(winners);
console.log(getUnmatchedSum(last) * n);
