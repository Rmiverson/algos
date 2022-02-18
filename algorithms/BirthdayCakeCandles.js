function birthdayCakeCandles(candles) {
    let count = 0
    let largest = null
    
    for (let i = 0; i < candles.length; i++) {
        if (largest === null) {
            largest = candles[i]
            count = 1
        } else if (largest < candles[i]) {
            count = 1
            largest = candles[i]
        } else if (largest === candles[i]) {
            count += 1
        }
    }
    return count
}