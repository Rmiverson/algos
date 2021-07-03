// given an array of integers, return the sum

let a = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

// faster (0.0146)
function sumOfArray (arr) {
   let t0 = performance.now()
   let stor = null
   for (let i = 0; i < arr.length; i++) {
      if (!stor) {
         stor = arr[i]
      } else {
         stor += arr[i]
      }
   }
   let t1 = performance.now()
   console.log("for: " + (t1 - t0).toFixed(4) + " seconds")
   return stor
}

// slower (0.0228)
function sumOfArrayEX (arr) {
   let t0 = performance.now()
   let stor = null
   arr.forEach(num => {
      (!stor) ? stor = num : stor += num
   })
   let t1 = performance.now()
   console.log("forEach: " + (t1 - t0).toFixed(4) + " seconds")
   return stor
}

console.log(sumOfArray(a))
console.log(sumOfArrayEX(a))