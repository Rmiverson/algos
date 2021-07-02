// given two sets of arrays containing 3 numbers each, compare each index value between the two sets and award a point to the set that has a larger number
// a[0] with b[0] etc..
// a[i] > b[i], a gets a point

// let a = [17, 28, 30, 17, 28, 30, 17, 28, 30, 17, 28, 30, 17, 28, 30, 17, 28, 30, 17, 28, 30, 17, 28, 30, 17, 28, 30]
// let b = [99, 16, 8, 99, 16, 8, 99, 16, 8, 99, 16, 8, 99, 16, 8, 99, 16, 8, 99, 16, 8, 99, 16, 8, 99, 16, 8]
"use strict"
function gen (num1, num2 ) {
   if (num1 >= 3 && num2 >= 3) {

      compare(splitNumbers(num1), splitNumbers(num2))
      compareRE(splitNumbers(num1), splitNumbers(num2))
      
   } else {
      console.log('input numbers greater than 3')
   }
}

function splitNumbers(num) {
   let arr = []
   for (let i = 0; i < num; i++) {
      arr.push(i)
   }
   return arr
}

function compare (a, b) {
   // best answer, ave 0.18 sec with a 3000 length array
   let t0 = performance.now()
   let score = [0, 0]

   for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
         score[0]++
      } else if (a[i] < b[i]) {
         score[1]++
      }      
   }
   let t1 = performance.now()
   console.log('iteration call took ' + (t1 - t0).toFixed(4) + ' milliseconds.') 
   return score
}

function compareRE (a, b) {
   // avg 0.53 sec with a 3000 length array
   let t0 = performance.now()
   let score = [0, 0]

   function comp (i) {
      const newIndex = i + 1
      if (i < a.length) {
         if (a[i] > b[i]) {
            score[0]++
         } else if (a[i] < b[i]) {
            score[1]++
         }    
         comp(newIndex)
      }
   }

   comp(0)

   let t1 = performance.now()
   console.log('recursion call took ' + (t1 - t0).toFixed(4) + ' milliseconds.')
   return score
}

// let a = [5, 6, 7]
// let b = [3, 6, 10]

// console.log(compare(a, b))
// console.log(compareRE(a, b))
gen(3000, 3000)