// https://www.codewars.com/kata/kebabize/train/javascript
// Modify the kebabize function so that it converts a camel case string into a kebab case.
//
// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes: - the returned string should only contain lowercase letters

function kebabize(str) {
  str = str.replace(/[0-9]/g, '');
  if(str[0].toUpperCase() === str[0]){
    str = str.replace(str[0], str[0].toLowerCase());
  }
  return str.replace(/[A-Z]/g, function(match){
    return '-' + match.toLowerCase();
   }
  )
}
