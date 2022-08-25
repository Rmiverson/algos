// The sum of the squares of the first ten natural numbers is,

// The square of the sum of the first ten natural numbers is,

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let SumOfSquarse = 0
let SquareOfSum = 0
let ans = 0

for (let i = 0; i <= 100; i++) {
    SumOfSquarse += (i * i)
    SquareOfSum += i
}

SquareOfSum = SquareOfSum * SquareOfSum

ans = Math.abs(SumOfSquarse - SquareOfSum)

console.log(ans)