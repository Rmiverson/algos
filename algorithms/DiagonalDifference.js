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
let matrix = [
   [11, 2, 4],
   [4, 5, 6],
   [10, 8, -12]
]

// let matrix = [
//    ["1", 2, 3],
//    [4, 5, 6],
//    [9, 8, 9]
// ]

const diff = (arr) => {   
   let reverse = arr.map(a => {
      return a.slice().reverse()
   })
   
   const getDiagonal = (array) => {
      let ans = []
      for (let i = 0; i < array.length; i++) {
         ans.push(parseInt(array[i][i]))
      }
      return ans
   }

   const add = (acc, a) => acc + a

   const ans =  Math.abs(getDiagonal(reverse).reduce(add) - getDiagonal(arr).reduce(add))
   console.log(ans)
   return ans
}

diff(matrix)