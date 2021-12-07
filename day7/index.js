import { test, puzzle } from "./input.js";
import _ from "lodash";

const input = puzzle;

const cache = new Map();

const max = _.max(input);

const distTo = (i, n) => Math.abs(i - n);

const calcFuelCost = (target, arr) => {
  if (cache.has(target)) {
    return;
  }  
  const totalFuel = arr.reduce((p, crab) => {
    if (crab === p) return 0;
    const dist = distTo(crab, target);
    let fuel = 0;
    for (let b = 0; b <= dist; b++) {
      fuel += b;
    }
    return p + fuel;
  }, 0);

  cache.set(target, totalFuel);
};

const findKeyForMin = (map) => {
  let [accKey, accVal] = [];
  map.forEach((value, key) => {
    if (_.isUndefined(accVal) || value < accVal) {
      accKey = key;
      accVal = value;
    }
  });
  return [accKey, accVal];
};

_.range(0, max).forEach((i) => calcFuelCost(i, input));
const [m, mVal] = findKeyForMin(cache);

console.log(m, mVal);
