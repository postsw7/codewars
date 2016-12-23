// https://www.codewars.com/kata/fibonacci-reloaded/train/javascript
// And here is Fibonacci again. This time we want to go one step further. Our fib() function must be faster! Can you do it?
//
// In case you don't know, what the Fibonacci number is:
//
// The nth Fibonacci number is defined by the sum of the two previous Fibonacci numbers. In our case: fib(1) == 0 and fib(2) == 1. With these initial values you should be able to calculate each following Fibonacci number.
//
// Example:
//
// fib(1); // === 0
// fib(2); // === 1
// fib(3); // === 1
// fib(4); // === 2
// fib(5); // === 3

function fib(n) {
  let arr = [];
  for(var i = 0; i < n; i++){
    if(i === 0){
      arr.push(i);
    } else if(i === 1){
      arr.push(i);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  return arr[n-1];
}
