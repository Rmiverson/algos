let primes = []

for (let i = 1; i <= 6; i++) {
    console.log(primes)
    if (i % 2 === 0) {
        if (primes.length > 1) {
            for (let j = 0; j < primes.length; j++) {
                if (i % primes[j]) {
                    
                }
                primes = [...primes, i]
            }            
        } else {
            primes = [...primes, i]
        }   
    }
}

console.log(primes)