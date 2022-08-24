// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

let num = 600851475143

const factorize = (n) => {
    let count = 0

    while ((n % 2) === 0) {
        n = parseInt(n / 2)
        count++
    }

    if (count > 0) {
        console.log(2, count)
    }

    for (let i = 3; i <= parseInt(Math.sqrt(n)); i += 2) {
        count = 0
        while (n % i == 0) {
            count++
            n = parseInt(n / i)
        }
        if (count != 0) {
            console.log(i, count)
        }
    }

    if (n > 2) {
        console.log(n, 1)
    }
}

factorize(13195)