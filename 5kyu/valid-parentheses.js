// Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.
//
// Examples:
// validParentheses( "()" ) => returns true
// validParentheses( ")(()))" ) => returns false
// validParentheses( "(" ) => returns false
// validParentheses( "(())((()())())" ) => returns true
//
// All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'

function validParentheses(parens){
  if(parens[0] === ')' || parens[parens.length - 1] === '('){
    return false;
  };
  var arrA = [];
  var arrB = [];
  parens.split('').forEach(x => {x === '(' ? arrA.push(x) : arrB.push(x)});
  return arrA.length === arrB.length;
}
