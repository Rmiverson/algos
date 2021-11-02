// given a square matrix, calculate the absolute difference between the sums of its diagonals
//ex:
//1 2 3
//4 5 6
//9 8 9
// 1 + 5 + 9 = 15
// 3 + 5 + 9 = 17
// |15 - 17| = 2
// answer is 2

// expected: 15
// let matrix = [
//    [11, 2, 4],
//    [4, 5, 6],
//    [10, 8, -12]
// ]

let matrix = [
   ["1", 2, 3],
   [4, 5, 6],
   [9, 8, 9]
]

function diff (arr) {
   let rev = arr.map(a => {
      return a.slice().reverse()
   })   

   const pek = (a) => {
      let ans = []
      for (let i = 0; i < a.length; i++) {
         ans.push(parseInt(a[i][i]))
      }
      return ans
   }

   const reducer = (acc, currentVal) => acc + currentVal

   const ans =  pek(rev).reduce(reducer) - pek(arr).reduce(reducer)
   console.log(ans)
   return ans
}

diff(matrix)