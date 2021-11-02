// given an array of integers, find the sum of its elements
//input: 1, 2, 3, 4, 10, 11 === 31
let input = [1, 2, 3, 4, 10, 11]
const input2 = ["78", "100", "92", "86", "89", "88", "91", "87"]

const sumOfArray = (arr) => {
   let stor = 0
   for (let i = 0; i < arr.length; i++) {
      stor += arr[i]
   }
   return stor
}

// console.log(sumOfArray(input))

const alt = (arr) => {
   stor = 0
   arr.forEach((value) => {
      stor += value
   })
   return stor
}

// console.log(alt(input))

// recursive
let sum = (arr) => (arr.length === 0) ? 0 : array[0] + sum(array.slice(1))