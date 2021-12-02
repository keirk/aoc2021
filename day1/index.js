import { input1 } from "./input1.js";
const ints = input1.split("\n").map((n) => parseInt(n, 10));

const slidingPartition = (arr, size) => {
  const remainer = arr.length % size;
  const partitions = [];
  let position = 0;
  while (position <= arr.length - remainer) {
    let start = position,
      end = position + size;
    partitions.push(arr.slice(start, end));
    position = position + 1;
  }

  return partitions;
};

const sum = (arr) => arr.reduce((p, c) => p + c, 0);
const isGtPrev = (v, i, arr) => {
  // skip pos 0
  if (i < 1) return false;
  const pre = arr[i - 1];
  return v > pre;
};

console.log(ints.filter(isGtPrev).length);
console.log(slidingPartition(ints, 3).map(sum).filter(isGtPrev).length);
