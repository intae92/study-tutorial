// https://www.acmicpc.net/problem/1157

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  //   input.push(line.split(" ").map((el) => parseInt(el)));
  solution(line);
  //   console.log(solution(line));
  rl.close();
}).on("close", function () {
  process.exit();
});

// const solution = (v) => {
//   let obj = {};

//   v.toUpperCase()
//     .split("")
//     .sort()
//     .forEach((char) => {
//       obj[char] ? (obj[char] += 1) : (obj[char] = 1);
//     });
//   const values = Object.values(obj);
//   const keys = Object.keys(obj);

//   if (keys.length === 1) return keys[0];

//   const maxCount = Math.max(...values);
//   if (values.indexOf(maxCount) !== values.lastIndexOf(maxCount)) return "?";

//   return keys[values.indexOf(maxCount)];
// };

const solution = (input) => {
  const MINUS = 65;
  const alphbet = Array(26)
    .fill(null)
    .map(() => 0);
  const word = input.toUpperCase();
  for (let w of word) {
    let idx = w.charCodeAt() - MINUS;
    alphbet[idx] += 1;
  }
  const max = Math.max(...alphbet);

  if (alphbet.filter((v) => v === max).length > 1) {
    return console.log("?");
  }
  let target = alphbet.indexOf(max) + MINUS;
  return console.log(String.fromCharCode(target));
};

//Mississipi
