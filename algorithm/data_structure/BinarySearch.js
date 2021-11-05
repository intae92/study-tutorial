// 이진 탐색은 매우 빠른 속도로 데이터를 찾을수 있지만
// ***********반드시 데이터가 정렬되어 있어야만 한다.*************
// https://im-developer.tistory.com/126
// https://velog.io/@yujo/JS%EC%9D%B4%EC%A7%84-%ED%83%90%EC%83%89Binary-Search

// const binarySearch = (target, sortedArray) => {
//   let startIndex = 0;
//   let endIndex = sortedArray.length - 1;

//   while (startIndex <= endIndex) {
//     const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

//     if (sortedArray[middleIndex] === target) {
//       return middleIndex;
//     }
//     if (sortedArray[middleIndex] < target) {
//       startIndex = middleIndex + 1;
//     } else {
//       endIndex = middleIndex - 1;
//     }
//   }
//   return -1;
// };

const nums = [10, 40, 50, 30, 60, 70, 80, 90, 20];
const sortedNums = nums.sort();

// console.log(sortedNums);
// console.log(binarySearch(30, sortedNums));

// const binarySearch = (target, sortedArray) => {
//   let startIndex = 0;
//   let endIndex = sortedArray.length - 1;

//   while (startIndex <= endIndex) {
//     const middleIndex = Math.floor((endIndex + startIndex) / 2);

//     if (sortedArray[middleIndex] === target) {
//       return middleIndex;
//     }

//     if (sortedArray[middleIndex] < target) {
//       startIndex = middleIndex + 1;
//     } else {
//       endIndex = middleIndex - 1;
//     }
//   }
//   return -1;
// };

const binarySearch = (target, sortedArray) => {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (sortedArray[middleIndex] === target) {
      return middleIndex;
    }

    if (sortedArray[middleIndex] < target) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
  return -1;
};

console.log(sortedNums);
console.log(binarySearch(30, sortedNums));
