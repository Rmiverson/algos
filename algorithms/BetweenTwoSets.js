function getTotal(a, b) {
    let count = 0

    for (let i = 1; i <= 100; i++) {
        if (a.every(int => (i % int === 0))) {
            if (b.every(int => (int % i === 0))) {
                count++
            }
        }
    }

    return count
}

getTotal([2,6],[24,36])