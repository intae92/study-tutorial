// https://www.acmicpc.net/problem/1251

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  //   input.push(line.split(" ").map((el) => parseInt(el)));
  //   solution(line);
  console.log(solution(line));
  rl.close();
}).on("close", function () {
  process.exit();
});

const reverse = (word) => {
  return word.split("").reverse().join("");
};

// mobitel
const solution = (line) => {
  const len = line.length;
  if (len === 3) return line;
  //   let result = Array(50)
  //     .fill(null)
  //     .map((m) => "z")
  //     .join("");
  let result = "z".repeat(50);
  for (let i = 1; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const a = reverse(line.substring(0, i));
      const b = reverse(line.substring(i, j));
      const c = reverse(line.substring(j));

      const newWord = a + b + c;
      if (result > newWord) result = newWord;
    }
  }
  return result;
};
