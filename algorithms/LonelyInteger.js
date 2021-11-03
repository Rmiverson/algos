// given an array of integers, where all elements but once occur twice, find the unique element.

// example:
const input = [14,2,3,3,2,1,1]
// 14

const lonelyInteger = (arr) => {
   const sorted = arr.sort((a, b) => a - b)
   let lonesome = null
   
   for (let i = 0; i < sorted.length; i++) {
      if (sorted[i - 1] != sorted[i] && sorted[i + 1] != sorted[i]) {
         lonesome = sorted[i]
      }
   }

   console.log(lonesome)
   return lonesome
}

lonelyInteger(input)