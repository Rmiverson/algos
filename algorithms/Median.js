// find the median of an odd numbered array

const input = [0,2,4,2,6,54,7]

const findMedian = (arr) => {
   const sort = arr.sort((a, b) => a - b)
   const middleIndex = Math.floor(sort.length / 2)
   const median = sort[middleIndex]

   console.log(median)
   return median
}

findMedian(input)