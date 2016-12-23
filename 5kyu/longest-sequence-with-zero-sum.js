// https://www.codewars.com/kata/longest-sequence-with-zero-sum/train/javascript
// Write a method which takes an array of integers (positive and negative) and returns the longest contiguous sequence in this array, which total sum of elements equal 0.
//
// For example:
// maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])
//
// Should return [92, -115, 17, 2, 2, 2], because this is the longest zero-sum sequence in the array.

var maxZeroSequence = function(arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr.slice(i, j).reduce((a, b) => a + b, 0) === 0){
        result.push(arr.slice(i, j));
      };
    };
  };
  return result.sort((a, b) => b.length - a.length)[0];
}
