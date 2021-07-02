// returns a boolean if all the brackets in the string are closed.
// return false if the string starts or ends with an unclosable bracket

let inputG = '[]()[]{}[]()'
let inputB = '[]))[]{}[]()'

function validString(s) {
   let strArr = s.split('')
   let stor = null

//    for(let i = 0; i < strArr.length; i++) {
//       if (!stor) {
//           stor = strArr[i];
//       } else if (strArr[i] === ']' && stor != '[' || strArr[i] === ')' && stor != '(' || strArr[i] === '}' && stor != '{') {
//           return false;
//       }
//       stor = strArr[i];
//   }

      for(let i = 0; i < strArr.length; i++) {
         stor = strArr[i + 1]
         if (strArr[i] === '[' && stor != ']' || strArr[i] === '(' && stor != ')' || strArr[i] === '{' && stor != '}' || strArr[0] === ']' || strArr[0] === ')' || strArr[0] === '}') {
            return false
         }
      }
   return true
}
console.log(validString(inputB))