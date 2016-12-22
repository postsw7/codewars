// Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of numbers.
//
// For example:
//
// greatestProduct("123834539327238239583") // should return 3240
// The input string always has more than five digits.
//
// Adapted from Project Euler.

function greatestProduct(input) {
  let result = [];
  for(let i = 0; i < input.length - 4; i++){
    result.push(input.slice(i, i+5).split('').reduce((a, b) => a * b, 1));
  };
  return result.sort((a, b) => b - a)[0];
}
