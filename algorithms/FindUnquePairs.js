// with a given array of numbers and a target number, find all the pairs of numbers that add up to the target
// sort the numbers in each pair from lowest to highest
// sort the array of pairs from lowest sum to highest sum
// if sums are equal default to original order

let input = [9, 2, 10, 1, 5, 3, 3]
let target = 12

function findUniquePairs(numbers, target) {
   let ans = []
   // numbers.forEach(num => {
   //    for (let i = 0; i < numbers.length; i++) {
   //       if (numbers[i] + num === target) {
   //          ans.push([numbers[i], num])
   //          console.log('hit')
   //       }
   //    }
   // })
   for (let x = 0; x < numbers.length; x++) {
      for (let i = 0; i < numbers.length; i++) {
         if (numbers[i] + numbers[x] === target) {
            ans.push([numbers[x], numbers[i]].sort())
         }
      }
   }
   let sorted = ans.sort()
   let filtered = sorted.forEach(num => {
      let ans = sorted
      for (let i = 0; i < ans.length; i++) {
         if (ans[i] === num) {
            ans.splice(i)
         }
      }
      console.log(ans)
      return ans
   })


   return filtered
}

console.log(findUniquePairs(input, target))