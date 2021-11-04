// given a list of integers, count and return the number of times each value appeares as an array of integers

const input = [1,1,3,2,1]
// [0,3,1,1]

const countSort = (arr) => {
   let freq = new Array(100).fill(0)

   for (let i = 0; i < arr.length; i++) {
      freq[arr[i]]++
   }

   console.log(freq)
   return freq
}

countSort(input)