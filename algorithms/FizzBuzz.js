// log each number from 1 to n
// each number that is divisable by 5 and 3 log 'FizzBuzz'
// each number that is divisable by 3 log 'Fizz'
// each number that is divisable by 5 log 'Buzz'

function fizzBuzz(n) {
   for (let i = 1; i < n + 1; i++) {
       if (i % 5 === 0 && i % 3 === 0) {
           console.log('FizzBuzz')
       } else if (i % 3 === 0) {
           console.log('Fizz')
       } else if (i % 5 === 0) {
           console.log('Buzz')
       } else {
           console.log(i)
       }
   }
}

// function fizzBuzz2(n) {
//    for (let i = 1; i < n + 1; i++)
// }

fizzBuzz(15)