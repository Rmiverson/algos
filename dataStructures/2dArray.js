function hourglassSumm(arr) {
    let highest = null

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[i].length - 2; j++) {
            let topRowSum = arr[0 + i][0 + j] + arr[0 + i][1 + j] + arr[0 + i][2 + j]
            let bottomRowSum = arr[2 + i][0 + j] + arr[2 + i][1 + j] + arr[2 + i][2 + j]
            let totalHourglassSum = topRowSum + arr[1 + i][1 + j] + bottomRowSum

            if (highest === null || highest < totalHourglassSum) {
                highest = totalHourglassSum
            }
        }
    }
    
    return highest
}