// function solution(arr) {
//   const answer = [];
//   const countList = Array(4)
//     .fill(null)
//     .map((x) => []);

//   let maxCount = 0;
//   for (let i = 1; i < 4; i++) {
//     const nums = arr.filter((v) => v === i).length;
//     countList[i].push(nums);
//     maxCount = Math.max(maxCount, nums);
//   }

//   const attached = [];
//   for (let i = 1; i < 4; i++) {
//     let plusCount = maxCount - countList[i];

//     answer.push(plusCount);
//   }

//   return answer;
// }

// // const arr = [2, 1, 3, 1, 2, 1];
// // const arr = [3, 3, 3, 3, 3, 3];
// const arr = [1, 2, 3];
// const a = solution(arr);
// console.log(a);

////22

// function solution(log) {
//   const len = log.length / 2;
//   const noStudyTime = 5;
//   const overStudyTime = 105;
//   let answerTime = 0;

//   for (let i = 0; i < log.length; i += 2) {
//     const start = log[i].split(":").map((v) => Number(v));
//     const end = log[i + 1].split(":").map((v) => Number(v));
//     const startTime = start[0] * 60 + start[1];
//     const endTime = end[0] * 60 + end[1];

//     let studyTime = endTime - startTime;

//     if (studyTime >= noStudyTime) {
//       if (studyTime > overStudyTime) {
//         answerTime += overStudyTime;
//       } else {
//         answerTime += studyTime;
//       }
//     }
//   }

//   let hour = String(parseInt(answerTime / 60));
//   let time = String(answerTime % 60);

//   hour.length === 1 ? (hour = "0" + hour) : hour;
//   time.length === 1 ? (time = "0" + time) : time;

//   return hour + ":" + time;
// }

// // const log = [
// //   "08:30",
// //   "09:00",
// //   "14:00",
// //   "16:00",
// //   "16:01",
// //   "16:06",
// //   "16:07",
// //   "16:11",
// // ];
// const log = ["01:00", "08:00", "15:00", "15:04", "23:00", "23:59"];

// const a = solution(log);
// console.log(a);

///33

// function solution(ings, menu, sell) {
//   let answer = 0;

//   const ings_obj = {};
//   const menu_obj = {};

//   for (let i of ings) {
//     const [name, price] = i.split(" ");
//     ings_obj[name] = Number(price);
//   }
//   for (let m of menu) {
//     const [name, list, price] = m.split(" ");
//     menu_obj[name] = {
//       list,
//       price: Number(price),
//     };
//   }

//   for (let s of sell) {
//     const [name, count] = s.split(" ");

//     const menuList = menu_obj[name].list;
//     const menuPrice = menu_obj[name].price;

//     let ingsPrice = 0;
//     for (let m of menuList) {
//       ingsPrice += ings_obj[m];
//     }

//     answer += (menuPrice - ingsPrice) * Number(count);
//   }

//   return answer;
// }

// const ings = ["r 10", "a 23", "t 124", "k 9"];
// const menu = [
//   "PIZZA arraak 145",
//   "HAMBURGER tkar 180",
//   "BREAD kkk 30",
//   "ICECREAM rar 50",
//   "SHAVEDICE rar 45",
//   "JUICE rra 55",
//   "WATER a 20",
// ];
// const sell = ["BREAD 5", "ICECREAM 100", "PIZZA 7", "JUICE 10", "WATER 1"];

// // const ings = ["x 25", "y 20", "z 1000"];
// // const menu = ["AAAA xyxy 15", "TTT yy 30", "BBBB xx 30"];
// // const sell = ["BBBB 3", "TTT 2"];
// const a = solution(ings, menu, sell);
// console.log(a);

//444

// function solution(s) {
//   const answer = [];
//   const sArr = s.split("");
//   let isSame = true;

//   let sameList = [];
//   while (sArr.length) {
//     const cur = sArr.shift();

//     if (sameList.length === 0) {
//       sameList = [cur];
//     } else {
//       if (sameList[sameList.length - 1] === cur) {
//         sameList.push(cur);
//       } else {
//         isSame = false;

//         answer.push(sameList.length);
//         sameList = [cur];
//       }
//     }
//   }

//   if (sameList.length !== 0) {
//     answer.push(sameList.length);
//   }

//   if (s[0] === s[s.length - 1] && !isSame) {
//     answer[0] += answer.pop();
//   }

//   return answer.sort();
// }

// const s = "aaabbaaa";
// const s1 = "wowwow";
// const s2 = "aaab";
// const s3 = "aaa";
// const s4 = "baaab";
// const s5 = "baaa";

// const a = solution(s5);
// console.log(a);

////5

function solution(rows, columns) {
  const maps = Array(rows)
    .fill(null)
    .map((v) => Array(columns).fill(0));

  const visited = Array(rows)
    .fill(null)
    .map((v) => Array(columns).fill(0));

  let flag = false;
  let lastVisitedPoint = [];
  let endCount = rows * columns;
  maps[0][0] = 1;
  //   console.log(maps);

  const nextPoint = (x, y) => {
    if (x >= rows) {
      return [0, y];
    }
    if (y >= columns) {
      return [x, 0];
    }
    return [x, y];
  };
  let testCount = 20;

  const dfs = (start) => {
    const stack = [start];

    while (stack.length) {
      if (testCount === 0) {
        console.log("end*********", stack, testCount);
        break;
      }
      testCount--;
      const [r, c] = stack.pop();
      //   maps[r][c]++;
      if (endCount === 0) {
        // console.log("&&&&&&&&&&end", endCount);
        break;
      }

      if (visited[r][c] === 0) {
        endCount--;
      }

      //   if (visited[r][c] !== 0) {
      //     if (flag === false) {
      //       flag = true;
      //       lastVisitedPoint = [r, c];
      //     }
      //     if (flag) {
      //       console.log("****************", lastVisitedPoint, r, c);
      //     }
      //     if (flag && lastVisitedPoint[0] === r && lastVisitedPoint[1] === c) {
      //       console.log("같은 위치******", r, c);
      //       break;
      //     }
      //   }
      visited[r][c]++;

      const cur = maps[r][c];
      //   console.log("currrrrrrrrrr", r, c, cur);
      let next = [];

      if (cur % 2 === 0) {
        next = nextPoint(r + 1, c);
      } else {
        next = nextPoint(r, c + 1);
      }
      const [nr, nc] = next;
      //   console.log("^^", cur, next, maps[nr][nc]);
      maps[nr][nc] += cur;

      stack.push(next);

      console.log("next", next);
    }
  };
  dfs([0, 0]);
  console.log("maps", maps);
  console.log("lastVisitedPoint", flag, lastVisitedPoint);
  console.log("visited", visited);
  return maps;
}

const rows = 3;
const columns = 4;

const a = solution(rows, columns);
console.log("answer", a);

//6

// function solution(time, plans) {
//   const Fday = [9.5, 18];
//   const Mday = [13, 18];
//   let answer = ["호치민"];
//   let hour = String(time).split(".");

//   if (hour.length === 1) {
//     hour = Number(hour[0]) * 60;
//   } else {
//     hour = Number(hour[0]) * 60 + 30;
//   }
//   //   console.log(hour);

//   const numbers = (w) => Number(w.replace(/\D/g, ""));
//   const words = (w) => w.replace(/\d/g, "");
//   for (let p of plans) {
//     const [city, start, end] = p;
//     answer.push(city);

//     const startHour =
//       words(start) === "PM" ? numbers(start) + 12 : numbers(start);
//     const endHour = words(end) === "PM" ? numbers(end) + 12 : numbers(end);

//     // console.log(startHour, endHour);
//     let needTime = 0;
//     if (startHour < Fday[1]) {
//       //   console.log(startHour, Fday[1]);

//       if (startHour <= Fday[0]) {
//         needTime += Fday[1] - Fday[0];
//       } else {
//         needTime += Fday[1] - startHour;
//       }
//     }
//     if (endHour > Mday[0]) {
//       if (endHour >= Mday[1]) {
//         needTime += Mday[1] - Mday[0];
//       } else {
//         needTime += endHour - Mday[0];
//       }
//       //   console.log(endHour, Mday[0]);
//     }
//     // console.log(needTime);

//     if (time < needTime) {
//       answer.pop();
//     } else {
//       time -= needTime;
//     }
//   }

//   //   console.log(answer, time);
//   return answer.pop();
// }

// const time = 3.5;
// const plans = [
//   ["홍콩", "11PM", "9AM"],
//   ["엘에이", "3PM", "2PM"],
// ];

// const a = solution(time, plans);
// console.log(a);

//7

// function solution(grid, clockwise) {
//   const answer = [];
//   const ROW = grid.length;
//   const COL = grid[ROW - 1].length;
//   const dash = "-";
//   const g = grid.map((v) => {
//     const len = v.length;
//     const needCount = COL - len + 1;

//     let attached = dash.repeat(needCount);
//     if (clockwise) {
//       return (attached + v).split("");
//     } else {
//       return (v + attached).split("");
//     }
//   });

//   if (clockwise) {
//     for (let j = 0; j < ROW; j++) {
//       const words = [];
//       for (let i = ROW - 1; i >= 0; i--) {
//         words.push(g[i].pop());
//         words.push(g[i].pop());
//       }

//       const newWords = words.filter((v) => v !== dash).join("");

//       answer.push(newWords);
//     }
//   } else {
//     for (let j = 0; j < ROW; j++) {
//       const words = [];
//       for (let i = ROW - 1; i >= 0; i--) {
//         words.push(g[i].shift());
//         words.push(g[i].shift());
//       }

//       const newWords = words
//         .filter((v) => v !== dash)
//         .reverse()
//         .join("");

//       answer.push(newWords);
//     }
//   }

//   return answer.reverse();
// }

// const grid = ["1", "234", "56789"];
// const clockwise = true;
// // const grid = ["A", "MAN", "DRINK", "WATER11"];
// // const clockwise = false;
// const a = solution(grid, clockwise);
// console.log(a);
