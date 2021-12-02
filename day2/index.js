import { input1, input2 } from "./input1.js";

const commands = input2.split("\n");

let horz = 0,
  depth = 0,
  aim = 0;
commands.forEach((command) => {
  const [direction, input] = command.split(" ");

  switch (direction) {
    case "forward":
      horz += parseInt(input, 10);
	  depth += aim * parseInt(input, 10);
      break;
    case "down":
      aim += parseInt(input, 10);
      break;
    case "up":
      aim -= parseInt(input, 10);
      break;
    default:
      break;
  }
});

console.log(horz * depth);
