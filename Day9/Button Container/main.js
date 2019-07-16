/* 
let l = "4";
let a = ["1", "2", "3", "6", "9", "8", "7", "4"];
let b = ["1", "2", "3", "6", "9", "8", "7", "4"];

let rotate = function() {
  for (let i = 7; i > 0; i--) {
    a[i] = a[i - 1];
  }

  a[0] = l;
  l = a[7];

  for (let i = 0; i < 8; i++) {
    document.getElementById("btn" + b[i]).innerText = a[i];
  }
};
*/

let nums = [1, 2, 3, 6, 9, 8, 7, 4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];

let btn5 = document.getElementById("btn5");

btn5.onclick = function() {
  nums.unshift(nums.pop());
  for (i = 0; i <= 7; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = nums[i];
  }
};
