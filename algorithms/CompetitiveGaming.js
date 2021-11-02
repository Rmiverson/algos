'use strict'
let scores = [1000, 1000, 1000, 1000, 100, 453, 23442] // amount of players/scores
let k = 4 // cutoff rank, more than this wont be able to level up
// write a function that takes an array of scores and calculate how many players can level up, none can level up if they rank lower than k

let thicc = []

function numPlayers(k, scores) {
   let arrS = scores.sort((a, b) => b - a)
   let ranks = []
   let count = 0
   let last = null
   let ans = 0

   for (let i = 0; i < arrS.length; i++) {
      count++
      if (arrS[i] !== 0) {
         if (last === arrS[i]) {
            ranks[i] = ranks[i - 1]
         } else {
            ranks[i] = count
         }
      }

      last = arrS[i]
   }

   for (let i = 0; i < ranks.length; i++) {
      if (ranks[i] <= k){
         ans++
      }
   }
   console.log(ranks)
   return(ans)
}

console.log(numPlayers(k, scores))