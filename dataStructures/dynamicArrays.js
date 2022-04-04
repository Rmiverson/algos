function dynamicArray(n, queries) {
    let arr = Array.from(Array(n), () => new Array())
    let lastAns = 0
    let ansArray = new Array()

    for (let i = 0; i < queries.length; i++) {
        if (queries[i][0] === 1) {
            let idx = ((queries[i][1] ^ lastAns) % n)
            arr[idx].push(queries[i][2])
        }
        if (queries[i][0] === 2) {
            let idx = ((queries[i][1] ^ lastAns) % n)
            lastAns = arr[idx][queries[i][2] % arr[idx].length]
            ansArray.push(lastAns)
        }
    }
    console.log(queries)
    console.log(ansArray)
    return ansArray
}

dynamicArray(2, [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ])