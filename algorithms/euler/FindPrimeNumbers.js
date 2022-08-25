const factorize = (n) => {
    let count = 0
    let primes = []

    while ((n % 2) === 0) {
        n = parseInt(n / 2)
        count++
    }

    if (count > 0) {
        // console.log(2, count)

        for (let y = 0; y < count; y++) {
            primes.push(2)
        }
    }

    for (let i = 3; i <= parseInt(Math.sqrt(n)); i += 2) {
        count = 0
        while (n % i == 0) {
            count++
            n = parseInt(n / i)
        }
        if (count != 0) {
            // console.log(i, count)
            for (let y = 0; y < count; y++) {
                primes.push(i)
            }
        }
    }

    if (n > 2) {
        // console.log(n, 1)
        primes.push(n)
    }
    // console.log(primes)
    return primes
}

const findPrimes = (limit) => {
    let primes = []
    let i = 2

    while (primes.length < limit) {
        let factors = factorize(i)

        if (factors.length < 2) {
            primes.push(i)
            
        }
        i++
    }
    // finds the largest prime number at the limit
    console.log(primes[primes.length - 1])
}

findPrimes(10001)