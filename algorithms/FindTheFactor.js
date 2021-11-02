// find the factors of a number (n) then find the p^th element sorted ascending

let n = 22876792454961
let p = 28

// let n = 10
// let p = 3

function pthFactor(n, p) {
   let arr = []

   // console.log("n: " + n)
   // console.log('p: ' + p)

   for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
         arr.push(i)
         console.log(i)
      }

      if (arr.length === p) {
         return arr[p - 1]
      }    
   }

   // if (arr.length < p) {
      return 0
   // } 
}

console.log(pthFactor(n, p))