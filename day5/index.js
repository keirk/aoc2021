import { test, puzzle } from "./input.js";
import _ from "lodash";

//console.log(test, puzzle);
const input = puzzle;

const unfold = (accumulator, [startX, startY], [stopX, stopY]) => {
  const last = _.last(accumulator);
  if (_.isUndefined(last)) {
    accumulator.push([startX, startY]);
    return unfold(accumulator, [startX, startY], [stopX, stopY]);
  }
  let [stepX, stepY] = last;
  if (stepX === stopX && stepY === stopY) return accumulator;
  stepX = stepX > stopX ? stepX - 1 : stepX;
  stepX = stepX < stopX ? stepX + 1 : stepX;
  stepY = stepY > stopY ? stepY - 1 : stepY;
  stepY = stepY < stopY ? stepY + 1 : stepY;
  accumulator.push([stepX, stepY]);
  return unfold(accumulator, [startX, startY], [stopX, stopY]);
};
const fill = (arr, start, end) => {
  const steps = unfold([], start, end);
  steps.forEach((step) => {
    const [x, y] = step;
    let row = arr[y];
    if (_.isUndefined(row)) row = [];
    if (!row[x]) {
      row[x] = 1;
    } else {
      row[x] = row[x] + 1;
    }
    arr[y] = row;
  });
  return arr;
};

const answer = input
  .map((i) => {
    const y = i.split(" -> ");
    const first = y[0].split(",");
    const second = y[1].split(",");
    return {
      x1: parseInt(first[0], 10),
      y1: parseInt(first[1], 10),
      x2: parseInt(second[0], 10),
      y2: parseInt(second[1], 10),
    };
  })
  //.filter((i) => i.x1 === i.x2 || i.y1 === i.y2)
  .reduce((arr, coord) => {
    const start = [coord.x1, coord.y1];
    const end = [coord.x2, coord.y2];
    return fill(arr, start, end);
  }, [])
  .flatMap((i) => i)
  .filter((i) => i >= 2).length;

console.log({ answer });
