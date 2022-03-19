function gridChallenge(grid) {
    let store = null

    for (let i = 0; i < grid.length; i++) {
        let sortedSubArray = grid[i].split('').sort()
        console.log(sortedSubArray) 

        if (store === null) {
            store = sortedSubArray
        } else {
            for (let x = 0; x < sortedSubArray.length; x++) {
                if (store[x] > sortedSubArray[x]) {
                    console.log('NO')
                    return 'NO'
                }                
            }
        }
    }
    console.log('YES')
    return 'YES'
}

let sample = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']

gridChallenge(sample)