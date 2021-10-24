// https://www.acmicpc.net/problem/1753

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => parseInt(el)));
  //   solution(line);
  // console.log(solution(line));
  //   input.push(parseInt(line));
  // rl.close();
}).on("close", function () {
  solution(input[0], input.slice(1));
  //   console.log(solution(input[0], input.slice(1)));
  process.exit();
});

// 4 5 1
// 1 2
// 1 3
// 1 4
// 2 4
// 3 4

const solution = (option, list) => {
  //   return result;
};
