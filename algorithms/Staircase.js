function staircase(n) {
    for (let i = 0; i < n; i++) {
        let line = []
        for (let x = 0; x < n; x++) {
            if (x <= i) {
                line[x] = '#'
            } else {
                line[x] = ' '
            }
        }
        console.log(line.reverse().join(''))
    }

}