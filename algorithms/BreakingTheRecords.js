function breakingRecords(scores) {
    // go through the scores
    // get min and max
    // if the min is less than the prev, up one
    // if the max is more than prev, up one
    // return the recorded ups 

    let min = null
    let max = null

    let maxMinCount = [0,0]

    for (let i = 0; i < scores.length; i++) {
        if (min === null && max === null) {
            min = scores[i]
            max = scores[i]
        } else if (scores[i] < min) {
            min = scores[i]
            maxMinCount[1]++
        } else if (scores[i] > max) {
            max = scores[i]
            maxMinCount[0]++
        }
        console.log(`max: ${max}`, `min: ${min}`)
        console.log(maxMinCount)
    }
    console.log(`max: ${max}`, `min: ${min}`)
    console.log(maxMinCount)
    return maxMinCount
}

breakingRecords([0,9,3,10,2,20])