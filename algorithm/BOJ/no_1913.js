// https://www.acmicpc.net/problem/1913

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  //   input.push(line.split(" ").map((el) => parseInt(el)));
  //   solution(line);
  // console.log(solution(line));
  input.push(parseInt(line));
  // rl.close();
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});

// 7
// 35
const solution = (line) => {
  return line;
};
