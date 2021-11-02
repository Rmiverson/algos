// should be 81.25
const input = ["78", "100", "92", "86", "89", "88", "91", "87"]

const findAverage = (arr) => {
   let total = 0
   for (let i = 0; i < arr.length; i++) {
      total += Number(arr[i])
      // console.log(Number(arr[i]))
   }
   // console.log(total)
   // console.log(arr.length)
   return total / arr.length
   
}

console.log(findAverage(input))