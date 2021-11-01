function solution(n, wires) {
  let result = n;

  let visitedV1 = [];
  let visitedV2 = [];

  const graph = Array(n + 1)
    .fill(null)
    .map((v) => []);

  for (let w of wires) {
    const [from, to] = w;
    graph[from].push(to);
    graph[to].push(from);
  }

  //   console.log(graph);

  const dfs = (startEdge) => {
    const connectEdge = graph[startEdge];

    if (connectEdge.length === 0) return;

    for (let cutEdge of connectEdge) {
      visitedV1 = [];
      visitedV2 = [];
      let stack = [startEdge];
      while (stack.length) {
        const cur = stack.pop();
        if (!visitedV1.includes(cur)) visitedV1.push(cur);
        stack.push(
          ...graph[cur].filter((v) => v !== cutEdge && !visitedV1.includes(v))
        );
      }

      stack = [cutEdge];
      while (stack.length) {
        const cur = stack.pop();
        if (!visitedV2.includes(cur)) visitedV2.push(cur);
        stack.push(
          ...graph[cur].filter((v) => v !== startEdge && !visitedV2.includes(v))
        );
      }
      //   console.log("---", startEdge, cutEdge);
      //   console.log(visitedV1, visitedV1.length);
      //   console.log(visitedV2, visitedV2.length);
      //   console.log("---");
      //   console.log("");

      result = Math.min(result, Math.abs(visitedV1.length - visitedV2.length));
    }
  };

  for (let i = 1; i <= n; i++) {
    dfs(i);
  }

  //   console.log(result);
  return result;
  //   console.log(visitedV1);
}

const n = 9;
const wires = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];

solution(n, wires);
