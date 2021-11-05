/**
 * 순열, 조합, 중복순열
 * https://jun-choi-4928.medium.com/javascript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-21df4b536349
 */

// const getCombinations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

//   arr.forEach((fixed, index, origin) => {
//     const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
//     const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
//     const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
//     results.push(...attached); // 배열 spread syntax 로 모두다 push
//   });

//   return results; // 결과 담긴 results return
// };

// const example = [1, 2, 3, 4, 5, 6, 7];
// const result = getCombinations(example, 3);
// console.log(result);

// const getPermutations1 = (arr, selectNumber) => {
//   const results = [];
//   if (selectNumber === 1) return arr.map((v) => [v]);

//   arr.forEach((fixed, index, origin) => {
//     // const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     const rest = origin;
//     const permutation = getPermutations1(rest, selectNumber - 1);
//     const attached = permutation.map((v) => [fixed, ...v]);
//     results.push(...attached);
//   });
//   return results;
// };

// const result1 = getPermutations1(example, 3);
// console.log(result1);

// const getPermutations = (arr, selectNumber) => {
//   const results = [];
//   if (selectNumber === 1) return arr.map((value) => [value]);

//   arr.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     // const rest = [...origin];
//     const permutations = getPermutations(rest, selectNumber - 1);
//     const attached = permutations.map((permuttaion) => [fixed, ...permuttaion]);
//     results.push(...attached);
//   });

//   return results;
// };

const example = [1, 2, 3, 4];
const obj = [];
const getCombinations = (arr, selectNumber) => {
  // console.log(arr);
  obj.push(arr);

  for (let i = selectNumber; i < arr.length; i++) {
    let combiArr = [...arr];
    combiArr[i] = "-";
    getCombinations(combiArr, i + 1);
  }
};

getCombinations(example, 0);
console.log(obj);
