function birthday(s, d, m) {
    console.log(s)
    console.log('d: ' + d)
    console.log('m: ' + m)
    let totalSegments = 0

    for (let i = 0; i <= s.length - m; i++) {
        let sumStore = 0
        for (let j = 0; j < m; j++) {
            sumStore += s[j + i]
        }
        console.log(sumStore)
        if (sumStore === d) {
            
            totalSegments++
        }
        sumStore = 0
    }
    console.log(totalSegments)
    return totalSegments
}

birthday([2,5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1,], 18, 7)