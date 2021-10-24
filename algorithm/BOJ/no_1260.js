// https://www.acmicpc.net/problem/1260

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
  let result;
  const [N, M, V] = option;
  const edge = [];
  //   const visited = Array(N + 1).fill(false);
  let DFS = [V],
    BFS = [V];

  for (let i = 1; i <= N; i++) {
    edge[i] = [];
  }
  for (let i of list) {
    const [from, to] = i;

    edge[from].push(to);
    //  = [...edge[from], to].sort();
    edge[to].push(from);
    //  = [...edge[to], from].sort();
  }
  //   console.log(edge);

  const dfs = () => {
    const visited = [];
    while (DFS.length) {
      let current = DFS.pop();
      if (!visited.includes(current)) {
        // console.log(current);
        visited.push(current);
        DFS.push(
          ...edge[current]
            .filter((x) => !visited.includes(x))
            .sort((a, b) => b - a)
        );
      }
    }
    console.log(visited.join(" ").trim());
  };

  const bfs = () => {
    const visited = [];
    while (BFS.length) {
      let current = BFS.shift();
      if (!visited.includes(current)) {
        visited.push(current);
        BFS.push(
          ...edge[current]
            .filter((x) => !visited.includes(x))
            .sort((a, b) => a - b)
        );
      }
    }
    console.log(visited.join(" ").trim());
  };

  dfs();
  bfs();
  //   return result;
};
