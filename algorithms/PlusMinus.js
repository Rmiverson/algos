// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with  places after the decimal.

// example input:
const arr = [1,1,0,-1,-1]
//output:
//0.400000
//0.400000
//0.200000

const plusMinus = (arr) => {
   // Positives, Negatives, Zeros
   let numbers = [0,0,0]

   const averageOf = (array, integer) => {
      const sum = array.reduce((acc, a) => acc + a, 0)
      return Math.abs(integer / sum).toFixed(6)
   }

   arr.forEach(integer => {
      if (integer < 0) {
         numbers[1]++
      } else if (integer === 0) {
         numbers[2]++
      } else if (integer > 0) {
         numbers[0]++
      }
   })

   numbers.forEach(integer => {
      console.log(averageOf(numbers, integer))   
   })  
}

plusMinus(arr)