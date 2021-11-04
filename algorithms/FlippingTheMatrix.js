// Given the initial configuations for q matrices, reverse the rows and columns of each matrix in the best possible way so that the sum of the elements in the matrix's upper left quadrant is maximal.

const input = [
   [112,42,83,119],
   [56,125,56,49],
   [15,78,101,43],
   [62,98,114,108]
]
//output: 414

const flipOffTheMatrix = (matrix) => {
   let sum = null
   const quadSize = matrix.length / 2

   for (let i = 0; i < quadSize; i++) {
      for (let j = 0; j < quadSize; j++) {
         let p1 = matrix[i][(2 * quadSize) - j - 1]
         let p2 = matrix[i][j]
         let p3 = matrix[(2 * quadSize) - i - 1][j]
         let p4 = matrix[(2 * quadSize) - i - 1][(2 * quadSize) - j - 1]

         sum += Math.max(p1, Math.max(p2, Math.max(p3, p4)))
      }
   }
   
   console.log(sum)
   return sum
}

flipOffTheMatrix(input)