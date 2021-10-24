// https://programmers.co.kr/learn/courses/30/lessons/12978
// 다익스트라

// const solution = (N, road, K) => {
//   const dist = Array(N + 1).fill(Infinity);
//   const adj = Array.from({ length: N + 1 }, () => []);

//   road.forEach(([a, b, c]) => {
//     adj[a].push({ to: b, time: c });
//     adj[b].push({ to: a, time: c });
//   });
//   //   console.log(adj);
//   const pq = [{ to: 1, time: 0 }];
//   dist[1] = 0;
//   while (pq.length) {
//     let { to, time } = pq.pop();
//     adj[to].forEach((next) => {
//       if (dist[next.to] > dist[to] + next.time) {
//         dist[next.to] = dist[to] + next.time;
//         pq.push(next);
//       }
//     });
//   }
//   return dist.filter((x) => x <= K).length;
// };
const solution = (N, road, K) => {
  const queue = [];
  const adj = Array.from(Array(N + 1), () => []);
  const dist = [0, 0];

  for (let i = 0; i < N - 1; ++i) dist.push(Number.MAX_VALUE);

  road.map((info) => {
    const [a, b, c] = info;
    adj[a].push({ to: b, weight: c });
    adj[b].push({ to: a, weight: c });
  });
  queue.push({
    to: 1,
    weight: 0,
  });

  (function () {
    while (queue.length) {
      let edge = queue.shift();
      adj[edge.to].map((next) => {
        if (dist[next.to] > dist[edge.to] + next.weight) {
          dist[next.to] = dist[edge.to] + next.weight;
          queue.push(next);
        }
      });
    }
  })();

  //   console.log(dist);
  return dist.slice(1).filter((x) => x <= K).length;
};

const N = 5;
const road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];
const K = 3;

console.log(solution(N, road, K));
