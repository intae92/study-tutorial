// https://www.acmicpc.net/problem/1012

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
  console.log(solution(input[0][0], input.slice(1)));
  process.exit();
});

// 5
// RRRBB
// GGBBB
// BBBRR
// BBRRR
// RRRRR

const solution = (caseCount, list) => {
  const farms = [];
  for (let i = 0; i < caseCount; i++) {
    const farm = [];
    const [M, N, K] = list[0];

    farms.push(list.splice(0, K + 1));
  }

  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const isValidPoint = (x, y, mx, ny) => {
    return x >= 0 && y >= 0 && x < mx && y < ny;
  };

  const dfs = (start, land, visited) => {
    const stack = start;
  };

  for (let farm of farms) {
    const [M, N, K] = farm[0];
    const land = Array(N)
      .fill(null)
      .map((x) => Array(M).fill(0));

    const visited = Array(N)
      .fill(null)
      .map((x) => Array(M).fill(false));

    for (let yx of farm.slice(1)) {
      const [y, x] = yx;
      land[x][y] = 1;
    }

    const start = [0, 0];
    for (let i = 0; i < 4; i++) {
      dfs(start, land, visited);
    }
  }
  return 0;
};

// 적록색약 RG / B
// 일반인 R / G / B
