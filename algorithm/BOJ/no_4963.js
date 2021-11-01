// https://www.acmicpc.net/problem/4963

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(
    line
      .trim()
      .split(" ")
      .map((el) => parseInt(el))
  );
  //   solution(line);
  // console.log(solution(line));
  //   input.push(parseInt(line));
  // rl.close();
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});

const solution = (input) => {
  console.log(input);

  return 0;
};
