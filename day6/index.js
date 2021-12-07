import { test, puzzle } from "./input.js";
import _ from "lodash";
//console.log(test, puzzle);
const input = test;

const solve = (input, days) => {
  const dayWiseFishCount = Array(9).fill(0);

  // create buckets of fish based on age
  input.forEach((f) => dayWiseFishCount[f]++);

  for (let day = 1; day <= days; day++) {
    // the day zeros = the fish ready to be creted
    const fishReadyToCreate = dayWiseFishCount.shift();
    // put the babies on day 8
    dayWiseFishCount[8] = fishReadyToCreate;
    // add the add adults to day 6
    dayWiseFishCount[6] += fishReadyToCreate;
  }

  return _.sum(dayWiseFishCount);
};

console.log(solve(input, 256));
