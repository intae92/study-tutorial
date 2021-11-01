// function solution(word) {
//   return (
//     Array(5)
//       .fill(0)
//       .reduce(
//         (arr, v, i) =>
//           arr.concat(getPermutations(["A", "E", "I", "O", "U"], i + 1)),
//         []
//       )
//       .sort()
//       .indexOf(word) + 1
//   );
// }

// const getPermutations = function (arr, selectNum) {
//   const result = [];
//   if (selectNum === 1) return arr.map((v) => v);

//   arr.forEach((v, idx, arr) => {
//     const fixed = v;
//     const permutationArr = getPermutations(arr, selectNum - 1);
//     const combineFix = permutationArr.map((v) => fixed.concat(v));
//     result.push(...combineFix);
//   });

//   return result;
// };
// const word = "AAAAE";
// console.log(solution(word));

// const permutation = (arr, num) => {
//   let res = [];
//   if (num === 1) return arr.map((v) => [v]);

//   arr.forEach((v, idx, arr) => {
//     const fixer = v;
//     const restArr = arr;
//     // const restArr = arr.filter((_, index) => index !== idx);
//     const permutationArr = permutation(restArr, num - 1);
//     const combineFix = permutationArr.map((v) => [fixer, ...v]);
//     res.push(...combineFix);
//   });
//   return res;
// };

// const solution = (word) => {
//   const alphabet = ["A", "E", "I", "O", "U"];
//   let res = [];

//   for (let i = 1; i < 6; i++) {
//     let tmp = permutation(alphabet, i);
//     res.push(...tmp.map((v) => v.join("")));
//   }
//   res.sort();
//   // console.log(res);
//   return res.indexOf(word) + 1;
// };

// const word = "E";
// console.log(solution(word));

////////////

//////////////

const solution = (word) => {
  const alpha = ["A", "E", "I", "O", "U"];
  const list = [];

  const getPermutation = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map((v) => v);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index)];
      const permutations = getPermutation(rest, selectNumber - 1);
      const attached = permutations.map((v) => [fixed, ...v].join(""));
      results.push(...attached);
    });
    return results;
  };

  for (let i = 1; i <= 5; i++) {
    list.push(...getPermutation(alpha, i));
  }
  list.sort();
  console.log(list);
  // console.log(list.indexOf(word));
  return list.indexOf(word) + 1;
};

const word = "I";

console.log(solution(word));
// console.log(solution(word));
