const solution = () => {
  const farm = Array(5)
    .fill(null)
    .map((x) => Array(5).fill(0));

  const visited = Array(5)
    .fill(null)
    .map((x) => Array(5).fill(0));

  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let points = [];

  const isValidPoint = (x, y) => x >= 0 && y >= 0 && x < 5 && y < 5;

  const dfs = (x, y) => {
    console.log(x, y);
    for (const [a, b] of direction) {
      const [nx, ny] = [x + a, y + b];
      console.log("--", nx, ny);
      if (isValidPoint(nx, ny)) {
        if (visited[nx][ny] === 0) {
          visited[nx][ny] = 1;
          console.log(nx, ny);
          console.log(visited);
          dfs(nx, ny);
        }
      }
    }
  };
  dfs(0, 0);
  console.log(visited);
};

solution();
