// Array.prototype.includesOneof = function (arr) {
//   for (let i = 0; i < this.length; i++) {
//     let strA = JSON.stringify(this[i]);
//     for (let j = 0; j < arr.length; j++) {
//       let strB = JSON.stringify(arr[j]);
//       if (strA === strB) return true;
//     }
//   }
//   return false;
// };

Array.prototype.includesOneof = function (arr) {
  return this.some((el) => {
    el = JSON.stringify(el);
    return arr.some((el2) => {
      return JSON.stringify(el2) == el;
    });
  });
};

const arr2 = [
  { name: "James Bond", code: "OO7" },
  { name: "Edward Donne", code: "OO1" },
];

console.log(arr2.includesOneof([{ name: "James Bond", code: "OO7" }]));
