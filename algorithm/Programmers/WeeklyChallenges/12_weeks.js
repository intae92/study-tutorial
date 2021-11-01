function solution(k, dungeons) {
  let answer = -1;
  const orderList = [];
  for (let i = 0; i < dungeons.length; i++) {
    orderList.push(i);
  }
  dungeons.sort((a, b) => a[0] - b[0]);

  const getPermutation = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map((v) => [v]);
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutation = getPermutation(rest, selectNumber - 1);
      const attached = permutation.map((v) => [fixed, ...v]);
      results.push(...attached);
    });

    return results;
  };
  const dungeonsOrderList = getPermutation(orderList, dungeons.length);

  //   console.log(dungeonsOrderList);

  dungeonsOrderList.forEach((_orderList, index, origin) => {
    let _k = k;
    let count = 0;
    for (let order of _orderList) {
      const currentDungeons = dungeons[order];
      const [minK, consumeK] = currentDungeons;
      if (_k >= minK) {
        _k -= consumeK;
        count++;
      }
    }
    answer = Math.max(answer, count);
  });
  return answer;
}

const k = 80;
const dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];

// console.log(solution(k, dungeons));

const solution1 = (k, d) => {
  const N = d.length;
  const visited = Array(N).fill(false);
  let ans = 0;

  const dfs = (k, cnt) => {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < N; j++) {
      if (k >= d[j][0] && !visited[j]) {
        visited[j] = true;
        dfs(k - d[j][1], cnt + 1);
        visited[j] = false;
      }
    }
  };
  dfs(k, 0);

  return ans;
};

console.log(solution1(k, dungeons));
