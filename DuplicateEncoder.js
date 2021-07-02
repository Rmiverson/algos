// '(' for no repeted characters
// ')' for repeted characters
// ignores capitolization
// EX: "Success" => ")())())"

const ex1 = 'din' // "((("
const ex2 = 'recede' // "()()()"
const ex3 = 'Success' // ")())())"
const ex4 = '(( @' // "))((" 

// My answer
const duplicateEncode = (word) => {
   let arr = word.split('')
   let ans = []

   arr.forEach(char => {
      let acc = 0
      arr.forEach(val => {
         if ( char.toUpperCase() == val.toUpperCase() ) {
            acc++
         }
      })
      if (acc >= 2) {
         ans.push(')')
      } else {
         ans.push('(')
      }
   })

   console.log(ans.join(''))
}

// Best practice
const duplicateEncodeBest = (word) => {
   return word
      .toLowerCase()
      .split('')
      .map( (a, i, w) => {
         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('')
}

// duplicateEncode(ex4)
duplicateEncodeBest(ex3)