// https://programmers.co.kr/learn/courses/30/lessons/72412

// function solution(info, query) {
//   var answer = [];
//   let map = {};

//   function combination(infos, score, map, start) {
//     let key = infos.join(""); //키 값으로 쓸거 합쳐주기
//     let value = map[key]; //값 있는지 없는지 확인해주기

//     if (value) {
//       //값이 있으면 push
//       map[key].push(score);
//     } else {
//       //값이 없으면 프로퍼티 만들어줘야 됨
//       map[key] = [score];
//     }
//     //여기서는 - 를 이용해 조합 만들어주기

//     for (let i = start; i < infos.length; i++) {
//       let combiArr = [...infos]; //전개 연산자
//       //   console.log(i);
//       combiArr[i] = "-";
//       console.log(combiArr);
//       combination(combiArr, score, map, i + 1);
//       //   console.log(i, "---");
//     }
//   }

//   function binarySearch(map, key, score) {
//     let scoreArr = map[key];

//     if (scoreArr) {
//       let start = 0;
//       let end = scoreArr.length;
//       while (start < end) {
//         let mid = Math.floor((start + end) / 2);

//         if (scoreArr[mid] >= score) {
//           //현재 가르키는 값보다 내가 찾는 값이
//           end = mid;
//         } else if (scoreArr[mid] < score) {
//           start = mid + 1;
//         }
//       }
//       return scoreArr.length - start;
//     } else return 0;
//   }

//   //   for (let i = 0; i < 1; i++) {
//   for (let i = 0; i < info.length; i++) {
//     let infos = info[i].split(" ");
//     let score = infos.pop();
//     combination(infos, score, map, 0);
//   }

//   for (let key in map) {
//     map[key].sort((o1, o2) => o1 - o2);
//   }

//   for (let i = 0; i < query.length; i++) {
//     let querys = query[i].replace(/ and /g, "").split(" ");
//     let score = Number(querys.pop());
//     answer.push(binarySearch(map, querys.join(""), score));
//   }

//   return answer;
// }

const solution = (info, query) => {
  const map = {};
  const combination = (info, start, score) => {
    let key = info.join("");
    let value = map[key];

    if (value) {
      map[key].push(score);
    } else {
      map[key] = [score];
    }

    for (let i = start; i < info.length; i++) {
      const combiArr = [...info];
      combiArr[i] = "-";
      combination(combiArr, i + 1, score);
    }
  };

  for (let i = 0; i < info.length; i++) {
    const _info = info[i].split(" ");
    const score = Number(_info.pop());
    combination(_info, 0, score);
  }

  const binarySearch = (map, target, score) => {
    let arr = map[target];

    if (arr) {
      let startIndex = 0;
      let endIndex = arr.length;

      while (startIndex < endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (arr[middleIndex] >= score) {
          endIndex = middleIndex;
        } else if (arr[middleIndex] < score) {
          startIndex = middleIndex + 1;
        }
      }
      return arr.length - startIndex;
    } else {
      return 0;
    }
  };

  for (let key in map) {
    map[key].sort((a, b) => a - b);
  }

  const answer = [];
  for (let i = 0; i < query.length; i++) {
    const querys = query[i].replace(/ and /g, "").split(" ");
    const score = Number(querys.pop());

    answer.push(binarySearch(map, querys.join(""), score));
  }
  return answer;
};

const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];

const query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

const r = solution(info, query);
console.log(r);
