// // Homework :
// /*
// //Print a 2d array
// let arr = [[1,2],
//            [3,4],
//            [5,6]];

// */


// task #1
let arr_eliav = [
  ['I', '<3', 'javascript'],
  ['and', 'i', 'wish'],
  ['to be', 'a', 'frontend'],
  ['developer', 'at', 'Abra :)']

]

for (let i = 0; i < arr_eliav.length; i++) {
  for (let j = 0; j < arr_eliav[i].length; j++) {
    console.log(arr_eliav[i][j]);

  }

}

// /* Write a function that receive an array and an element, 
// the function should return the array while removing any of the element occurrence.
//  */

// task #2

function popingTheArray(arr) {
  while (arr.length) {

    arr.pop();
  }
  return arr.length

}
console.log(popingTheArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// /*
// write a power of function which retrieve a number and power value. The output should be the power of that number. Use only loops.
// */

// task #3
function powerOf(num, power) {
  let p = 1;
  for (let i = 0; i < power; i++) {
    p *= num;
  }
  return p;
}
console.log(powerOf(5, 2))


// /* 
// print the number of digits in a given number.
// 1000
// */
// task #4

function countDigits(num) {

  let numLen = 0;
  for (let i = 0; i < num || num == 1; i++) {
    num = Math.trunc(num / 10);
    numLen++;

  }
  return numLen + 1;

}
console.log(countDigits(5548138120))


// /*
// write a function which retrieve the sum of all digits in a number
// */

// task #5
function sumAllDigits() {
  let secretCode = 3553;
  let sum = 0;

  while (secretCode) {
    sum += secretCode % 10;
    secretCode = Math.floor(secretCode / 10);
  }
  return sum;

}
console.log(sumAllDigits())
// /*
// Write a function to retrieve the largest number in an array.
// */


// task #6
const getHeighstNum = (num) => {
  let highestNum = 0;
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    highestNum = highestNum < num[i] ? num[i] : highestNum;
  }
  return highestNum;
}
console.log(getHeighstNum([500, 1400, 150, 60, 5]));