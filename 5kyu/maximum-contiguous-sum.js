// https://www.codewars.com/kata/maximum-contiguous-sum/train/javascript
// Given an unsorted array of integer values, find the maximum positive sum of any contiguous range within the array.
//
// An array containing only negative values can return 0. Your solution should be efficient enough to not throw a timeout exception.
//
// Example:
//
// maxContiguousSum([3, -4, 8, 7, -10, 19, -3]); // returns 24
// maxContiguousSum([-8, -10, -12, -2, -3, 5]); // returns 5
// Visual example:
//
// [3, -4, 8, 7, -10, 19, -3]
//        |_____________|
//              ||
//              \/
//              24

function maxContiguousSum (arr) {
  let maxArr = [];
  for(let i = 0; i < arr.length; i++){
    let max = 0;
    for(let j = i + 1; j <= arr.length; j++){
      let sum = arr.slice(i, j).reduce((a, b) => a + b, 0);
      if(sum > max){
        max = sum;
      }
    }
    maxArr.push(max);
  }
  return Math.max(...maxArr);
}
