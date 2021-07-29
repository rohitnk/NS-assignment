// const a = [1, 2, 3, 4, 5, 6];
// // a. includesOneof([2, 8, 10]);

// Array.prototype.includesOneof = function (arr) {
//   for (let i = 0; i < this.length; i++) {
//     if (arr.includes(this[i])) return true;
//   }
//   return false;
// };

// console.log(a.includesOneof([1, 2, 3]));

Array.prototype.includesOneof = function (arr) {
  for (let i = 0; i < this.length; i++) {
    let strA = JSON.stringify(this[i]);
    for (let j = 0; j < arr.length; j++) {
      let strB = JSON.stringify(arr[j]);
      if (strA === strB) return true;
    }
  }
  return false;
};

const arr2 = [
  { name: "James Bond", code: "OO7" },
  { name: "Edward Donne", code: "OO1" },
];
// console.log(arr2);

console.log(arr2.includesOneof([{ name: "James Bond", code: "OO7" }]));
