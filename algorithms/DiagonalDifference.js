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

function diff (m) {
   let d1 = []
   let d2 = []
   
   // let i = 0;
   // m.forEach(arr => {
   //    d1.push(arr[i])
   //    i++
   // })

   for (let i = 0; i < m.length; i++) {
      d1.push(m[i][i])
   }

   // for (let i = m.length - 1; i >= 0; i--) {
   //    d2.push(m[i][i])
   // }

   for (let i = 0; i < m.length; i++) {
      let x = m[i].length - i
      for (let x = m[i].length; i >= 0; i--) {
         d2.push(m[i][x])
      }

   }
   




   console.log(d1)
   console.log(d2)
}

diff(matrix)