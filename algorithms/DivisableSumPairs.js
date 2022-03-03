function divisibleSumPairs(n, k, ar) {
    let numberOfPairs = []

    for (let i = 0; i < n; i++) {
        for (let x = 0; x < n; x++) {
            if ((((ar[i] + ar[x]) % k) === 0) && i != x) {
                numberOfPairs = [...numberOfPairs, [i, x].sort()] 
            }
        }
    }

    let stringPairs = numberOfPairs.map(JSON.stringify)
    let uniqueSet = new Set(stringPairs)
    let uniqueArray = Array.from(uniqueSet, JSON.parse)

    console.log(uniqueArray.length)
    return uniqueArray.length
}

divisibleSumPairs(6, 3, [1,3,2,6,1,2])