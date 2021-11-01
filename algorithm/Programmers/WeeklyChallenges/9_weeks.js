function solution(sizes) {
  const _sizes = sizes.map((v) => (v[0] < v[1] ? [v[1], v[0]] : v));
  const width = Math.max(..._sizes.map((v) => v[0]));
  const hight = Math.max(..._sizes.map((v) => v[1]));

  return width * hight;
}

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

console.log(solution(sizes));
