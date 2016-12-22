// Instructions
//
// Write a function intersect that takes any number of arguments. The function must return an array containing all the values that is present in every argument given to the function.
//
// All arguments given will be arrays.
// The first argument determines the order of the returned values.
// Return an empty array for empty result set.
// Example
//
// var a = ['dog', 'bar', 'foo'];
// var b = ['foo', 'bar', 'cat'];
// var c = ['gin', 'bar', 'foo'];
//
// intersect(a, b, c); // ['bar', 'foo']

var intersect = function (...arr) {
  if(arr[0] === undefined){
    return [];
  }
  let base = arr[0];
  let args = arr.slice(1);
  let result = base.filter(x => args.every(arr => arr.indexOf(x) !== -1));
  return result;
};
