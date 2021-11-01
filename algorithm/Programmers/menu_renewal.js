// https://programmers.co.kr/learn/courses/30/lessons/72411
// 메뉴 리뉴얼

function solution(orders, course) {
  var answer = [];

  const _orders = orders.map((c) => c.split("").sort().join(""));
  const results = [];

  const getPermutation = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const permutation = getPermutation(rest, selectNumber - 1);
      const attached = permutation.map((v) => [fixed, ...v].join(""));
      results.push(...attached);
    });
    return results;
  };
  for (let i of course) {
    const menuObj = {};
    let menuList = [];
    let maxCount = 0;
    for (let o of _orders) {
      const permutationList = getPermutation(o.split(""), i);
      for (let p of permutationList) {
        menuObj[p] === undefined ? (menuObj[p] = 1) : (menuObj[p] += 1);
        menuList.push(p);
        maxCount = Math.max(maxCount, menuObj[p]);
      }
    }
    // console.log(menuObj);

    const result = new Set(menuList.filter((v) => menuObj[v] === maxCount));
    // console.log(menuList);
    // console.log(maxCount);

    const r = [...result.keys()];
    for (let _r of r) {
      if (menuObj[_r] > 1) {
        results.push(_r);
      }
    }
  }

  return results.sort();
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];

// const orders = ["XYZ", "XWY", "WXA"];
// const orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
// const course = [2, 3, 5];

console.log(solution(orders, course));
