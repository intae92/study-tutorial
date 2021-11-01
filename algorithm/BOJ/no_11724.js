// https://www.acmicpc.net/problem/11724

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
  console.log(solution1(input[0], input.slice(1)));
  process.exit();
});

// 6 5
// 1 2
// 2 5
// 5 1
// 3 4
// 4 6

const solution = (option, list) => {
  const [N, M] = option;
  const visited = Array(N + 1).fill(false);
  const edge = [];
  let count = 0;

  for (let i = 1; i <= N; i++) {
    edge[i] = [];
  }

  for (let i of list) {
    const [from, to] = i;
    edge[from].push(to);
    edge[to].push(from);
  }

  const dfs = (start) => {
    visited[start] = true;
    for (let next of edge[start]) {
      if (!visited[next]) {
        dfs(next);
      }
    }
  };

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
};

const solution1 = (option, list) => {
  const [N, M] = option;
  const visited = Array(N + 1).fill(false);
  const edge = Array(N + 1)
    .fill(null)
    .map((x) => []);

  for (let i of list) {
    const [from, to] = i;
    edge[from].push(to);
    edge[to].push(from);
  }

  const dfs = (start) => {
    visited[start] = true;
    for (let next of edge[start]) {
      if (!visited[next]) {
        dfs(next);
      }
    }
  };

  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
};
