// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let i = 1
let ans = false

const check = (num) => {
    for (let i = 1; i <= 20; i++) {
        // console.log(i)
        if (num % i !== 0) {
            return false
        }
    }
    console.log(num, true)
    return true
}

while (!ans) {
    if (check(i)) {
        ans = i
    }
    i++
}
console.log(ans)