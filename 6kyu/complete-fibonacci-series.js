// https://www.codewars.com/kata/complete-fibonacci-series/train/javascript
// The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array
//
// Example:
//
// fibonacci(4); // should return [0,1,1,2]
// fibonacci(-1); // should return []

function fibonacci(n) {
  if(n <= 0){
    return [];
  } else {
    return fibo(n-1);
  }
}

function fibo(num){
  if(num <= 0){
    return [];
  }
  if(num === 1){
    return [0, 1];
  }
  let arr = fibo(num-1);
  arr.push(arr[num - 1] + arr[num - 2]);
  return arr;
}
