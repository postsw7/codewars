// Write a function isIntArray with the below signature.
//
// function isIntArray(arr) {
//     return true;
// }
// returns true if every element in an array is an integer.
// returns true if array is empty.
// returns false for every other input.

function isIntArray(arr) {
  if(arr === null || arr === undefined || !(typeof arr === 'object')){
    return false;
  }
  if(arr.length === 0){
    return true;
  }
  if(!isNaN(arr) || typeof arr === 'number'){
    return false;
  }

  return arr.every(x => !isNaN(x) && x % 1 === 0);
}
