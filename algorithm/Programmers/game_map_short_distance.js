// // https://programmers.co.kr/learn/courses/30/lessons/1844

// function solution(maps) {
//   var answer = -1;
//   const start = [0, 0];
//   const ROW = maps.length;
//   const COL = maps[0].length;
//   const visited = Array(ROW)
//     .fill(null)
//     .map((v) => Array(COL).fill(false));
//   let isEndPointTouch = false;
//   const direction = [
//     [-1, 0],
//     [1, 0],
//     [0, -1],
//     [0, 1],
//   ];

//   const isValidPoint = (x, y) => {
//     return (
//       x >= 0 &&
//       y >= 0 &&
//       x < ROW &&
//       y < COL &&
//       maps[x][y] === 1 &&
//       !visited[x][y]
//     );
//   };

//   const bfs = (start) => {
//     const queue = [start];
//     while (queue.length) {
//       const cur = queue.shift();
//       const [r, c] = cur;
//       if (visited[r][c]) continue;
//       visited[r][c] = true;
//       const preCount = maps[r][c];

//       for (let d of direction) {
//         const [x, y] = d;
//         const nx = x + r;
//         const ny = y + c;
//         if (isValidPoint(nx, ny)) {
//           if (!visited[nx][ny]) {
//             queue.push([nx, ny]);
//             maps[nx][ny] += preCount;
//             if (nx === ROW - 1 && ny === COL - 1) {
//               isEndPointTouch = true;
//             }
//             console.log(maps);
//           }
//         }
//       }
//     }
//   };

//   bfs([0, 0]);

//   //   console.log(answer);
//   //   console.log(maps);
//   //   console.log(isEndPointTouch);
//   return !isEndPointTouch ? -1 : maps[ROW - 1][COL - 1];
// }

// const maps = [
//   [1, 0, 1, 1, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 0, 1],
//   [0, 0, 0, 0, 1],
// ];

// // const maps = [
// //   [1, 0, 1, 1, 1],
// //   [1, 0, 1, 0, 1],
// //   [1, 0, 1, 1, 1],
// //   [1, 1, 1, 0, 0],
// //   [0, 0, 0, 0, 1],
// // ];
// console.log(solution(maps));

function solution(maps) {
  const ROW = maps.length;
  const COL = maps[0].length;

  const visited = Array(ROW)
    .fill(null)
    .map((v) => Array(COL).fill(false));

  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const isValidPoint = (x, y) => {
    return (
      x >= 0 &&
      y >= 0 &&
      x < ROW &&
      y < COL &&
      maps[x][y] === 1 &&
      !visited[x][y]
    );
  };

  const bfs = (start) => {
    const queue = [start];

    while (queue.length) {
      const [x, y] = queue.shift();

      if (visited[x][y]) continue;

      visited[x][y] = true;

      const cur = maps[x][y];

      for (let i = 0; i < 4; i++) {
        const [a, b] = direction[i];
        const nx = x + a;
        const ny = y + b;

        if (isValidPoint(nx, ny)) {
          maps[nx][ny] += cur;
          queue.push([nx, ny]);
        }
      }
    }
  };

  bfs([0, 0]);

  return maps[ROW - 1][COL - 1] === 1 ? -1 : maps[ROW - 1][COL - 1];
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

const maps1 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
];

const result = solution(maps1);
console.log(result);

const solution5 = (maps) => {
  const ROW = maps.length;
  const COL = maps[0].length;

  const visited = Array(ROW)
    .fill(null)
    .map((v) => Array(COL).fill(false));

  const isValidPoint = (x, y) => {
    return (
      x >= 0 &&
      y >= 0 &&
      x < ROW &&
      y < COL &&
      maps[x][y] === 1 &&
      !visited[x][y]
    );
  };

  const bfs = (start) => {
    const queue = [start];
    while (queue.length) {
      const [x, y] = queue.shift();
      if (visited[x][y]) continue;

      visited[x][y] = true;
      const cur = maps[x][y];
      for (let i = 0; i < 4; i++) {
        const [a, b] = direction[i];
        const nx = x + a;
        const ny = y + b;

        if (isValidPoint(nx, ny)) {
          maps[nx][ny] += cur;
          queue.push([nx, ny]);
        }
      }
    }
  };

  bfs([0, 0]);

  return maps[ROW - 1][COL - 1] === 1 ? -1 : maps[ROW - 1][COL - 1];
};
