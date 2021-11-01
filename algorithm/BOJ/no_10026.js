// https://www.acmicpc.net/problem/10026

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim().split(""));
  //   input.push(line.split(" ").map((el) => parseInt(el)));
  //   solution(line);
  // console.log(solution(line));
  //   input.push(parseInt(line));
  // rl.close();
}).on("close", function () {
  console.log(solution(input[0], input.slice(1)).trim());
  process.exit();
});

// 5
// RRRBB
// GGBBB
// BBBRR
// BBRRR
// RRRRR

// 5
// BBBBG
// GRBBB
// BBBBB
// BBBBB
// RRRRR
//5 4

// 5
// RGBBB
// BBBRG
// GRGRG
// BBBBR
// GGRBR
//12 5

// 6
// RRBBRR
// BBRRBB
// RRBBRR
// BBRRBB
// RRBBRR
// BBRRBB
// 18 18

// 2
// GR
// RG
const solution = (option, list) => {
  const N = Number(option[0]);

  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const visitedRGB = Array(N)
    .fill(null)
    .map((x) => Array(N).fill(0));

  const visitedRG = Array(N)
    .fill(null)
    .map((x) => Array(N).fill(0));

  let cntRGB = 0;
  let cntRG = 0;

  const isValidPoint = (x, y) => {
    return x >= 0 && y >= 0 && x < N && y < N;
  };

  const dfs = (start, isRGB) => {
    const stack = [start];
    // console.log(start);
    // let char = list[start[0]][start[1]];
    while (stack.length) {
      const [a, b] = stack.pop();
      let char = list[a][b];
      // console.log(a, b);

      for (let [x, y] of direction) {
        const nx = a + x;
        const ny = b + y;

        if (isValidPoint(nx, ny)) {
          if (isRGB) {
            if (char === list[nx][ny] && visitedRGB[nx][ny] === 0) {
              visitedRGB[nx][ny] = 1;
              stack.push([nx, ny]);
            }
          } else {
            const isRG =
              (list[nx][ny] === "R" || list[nx][ny] === "G") &&
              (char === "R" || char === "G");
            if (isRG && visitedRG[nx][ny] === 0) {
              visitedRG[nx][ny] = 1;
              stack.push([nx, ny]);
            } else if (char === list[nx][ny] && visitedRG[nx][ny] === 0) {
              visitedRG[nx][ny] = 1;
              stack.push([nx, ny]);
            }
          }
        }
      }
    }
  };

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (visitedRGB[row][col] === 0) {
        visitedRGB[row][col] = 1;
        cntRGB++;

        dfs([row, col], true);
      }
      if (visitedRG[row][col] === 0) {
        visitedRG[row][col] = 1;
        cntRG++;
        dfs([row, col], false);
      }
    }
  }

  return `${cntRGB} ${cntRG}`;
  // console.log(cntRGB);
  // console.log(cntRG);
};

// 적록색약 RG / B
// 일반인 R / G / B

// const { DH_NOT_SUITABLE_GENERATOR } = require("constants");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let n = 0;
// let board = [];
// let visitedRG = [];
// let visitedNRG = [];
// let cntRG = 0;
// let cntNRG = 0;
// const direction = [
//   [-1, 0],
//   [1, 0],
//   [0, -1],
//   [0, 1],
// ];
// const isValidPoint = (x, y, n) => {
//   if (x >= 0 && y >= 0 && x < n && y < n) {
//     return true;
//   }
//   return false;
// };
// const bfs = (start, isRG) => {
//   const q = [start];
//   const firstChr = board[start[0]][start[1]];
//   while (q.length > 0) {
//     const [currX, currY] = q.shift();
//     for (const [a, b] of direction) {
//       const [nx, ny] = [currX + a, currY + b];
//       if (isValidPoint(nx, ny, n)) {
//         // 적록 색약이면
//         if (isRG) {
//           if (!visitedRG[nx][ny]) {
//             if (
//               (firstChr === "R" || firstChr === "G") &&
//               (board[nx][ny] === "R" || board[nx][ny] === "G")
//             ) {
//               q.push([nx, ny]);
//               visitedRG[nx][ny] = 1;
//             } else if (firstChr === "B" && board[nx][ny] === "B") {
//               q.push([nx, ny]);
//               visitedRG[nx][ny] = 1;
//             }
//           }
//         } else {
//           if (!visitedNRG[nx][ny]) {
//             // 색맹아닌경우
//             // console.log(firstChr, board[nx][ny]);
//             if (firstChr === board[nx][ny]) {
//               // console.log('chk');
//               q.push([nx, ny]);
//               visitedNRG[nx][ny] = 1;
//             }
//           }
//         }
//       }
//     }
//   }
// };
// const solution = function (input) {
//   n = parseInt(input.shift());
//   board = input.map((row) => {
//     return Array.from(row);
//   });
//   visitedRG = Array.from({ length: n }, () =>
//     Array.from({ length: n }, () => 0)
//   );
//   visitedNRG = Array.from({ length: n }, () =>
//     Array.from({ length: n }, () => 0)
//   );
//   cntRG = 0;
//   cntNRG = 0;
//   for (let row = 0; row < n; row++) {
//     for (let col = 0; col < n; col++) {
//       if (!visitedNRG[row][col]) {
//         cntNRG++;
//         // console.log(row, col);
//         visitedNRG[row][col] = 1;
//         bfs([row, col], false);
//       }
//       if (!visitedRG[row][col]) {
//         cntRG++;
//         visitedRG[row][col] = 1;
//         bfs([row, col], true);
//       }
//     }
//   }
//   // console.log(visitedNRG);
//   console.log(`${cntNRG} ${cntRG}`);
// };
// const input = [];
// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   solution(input);
//   process.exit();
// });
