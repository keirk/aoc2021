import { test, puzzle } from "./input.js";

const input = puzzle;
const mostFrequent = (arr) => {
  const zeros = arr.filter((a) => a === "0").length;
  const ones = arr.length - zeros;
  return ones >= zeros ? "1" : "0";
};
const leastFrequent = (arr) => {
  const zeros = arr.filter((a) => a === "0").length;
  const ones = arr.length - zeros;

  return zeros <= ones ? "0" : "1";
};

const getOxGenRating = (arr) => {
  let index = 0;
  while (arr.length > 1) {
    const mc = mostFrequent(arr.map((a) => a[index]));
    arr = arr.filter((v) => {
      return v[index] === mc;
    });
    index++;
  }
  return arr[0];
};

const getCo2ScrubberRating = (arr) => {
  let index = 0;
  while (arr.length > 1) {
    const leastCommon = leastFrequent(arr.map((a) => a[index]));
    console.log({ leastCommon });
    arr = arr.filter((v) => v[index] === leastCommon);
    index++;
  }
  return arr[0];
};

const dec = [
  parseInt(getOxGenRating(input), 2),
  parseInt(getCo2ScrubberRating(input), 2),
];

console.log(dec, dec[0] * dec[1]);
