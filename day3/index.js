import { test, puzzle } from "./input.js";
//console.log(test, puzzle);

const input = test; //puzzle;
const getMostCommon = (arr) => {
  let res = [];
  for (let x of arr) {
    let count = 0;
    for (let i of arr) {
      if (i == x) {
        count++;
      }
    }
    res.push(count);
  }
  return arr[res.indexOf(Math.max(...res))];
};

//const parsed = [[], [], [], [], [], [], [], [], [], [], [], []];
const parsed = [[], [], [], [], []];

input.forEach((i) => {
  const arr = i.split("");
  arr.forEach((a, idx) => {
    parsed[idx].push(parseInt(a, 10));
  });
});
const mostCommon = [];
const leastCommon = [];
//find most common
parsed.forEach((p) => {
  const m = getMostCommon(p);
  mostCommon.push(m);
  leastCommon.push(m === 0 ? 1 : 0);
});
//get dec

const dec = [
  parseInt(mostCommon.join(""), 2),
  parseInt(leastCommon.join(""), 2),
];
//multiple
console.log(mostCommon, leastCommon);
console.log(dec[0] * dec[1]);
