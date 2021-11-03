// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// example input:
const arr = [1,3,5,7,9]
// output:
// 16 24

const miniMaxSum = (arr) => {
   let allSums = []

   const add = (acc, a) => {
      return acc + a
   }

   for (let i = 0; i < arr.length; i++) {
      const newArr = [].concat(arr)
      newArr.splice(i, 1)
      // console.log(newArr)
      allSums = [...allSums, newArr.reduce(add, 0)]
   }

   // console.log(allSums)
   console.log(Math.min(...allSums), Math.max(...allSums))
}

miniMaxSum(arr)