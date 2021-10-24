function solution(word) {
  return (
    Array(5)
      .fill(0)
      .reduce(
        (arr, v, i) =>
          arr.concat(getPermutations(["A", "E", "I", "O", "U"], i + 1)),
        []
      )
      .sort()
      .indexOf(word) + 1
  );
}

const getPermutations = function (arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => v);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const permutationArr = getPermutations(arr, selectNum - 1);
    const combineFix = permutationArr.map((v) => fixed.concat(v));
    result.push(...combineFix);
  });

  return result;
};
const word = "AAAAE";
console.log(solution(word));

// const permutation = (arr, num) => {
//     let res = [];
//     if (num === 1) return arr.map((v) => [v]);

//     arr.forEach((v, idx, arr) => {
//       const fixer = v;
//       const restArr = arr;
//       // const restArr = arr.filter((_, index) => index !== idx);
//       const permutationArr = permutation(restArr, num - 1);
//       const combineFix = permutationArr.map((v) => [fixer, ...v]);
//       res.push(...combineFix);
//     })
//     return res;
//   }

//   const solution = word => {
//     const alphabet = ['A', 'E', 'I', 'O', 'U'];
//     let res = [];

//     for (let i = 1; i < 6; i++) {
//       let tmp = permutation(alphabet, i);
//       res.push(...tmp.map((v) => v.join('')))
//     }

//     res.sort();

//     return res.indexOf(word) + 1;
//   }
