function superDigit(n, k) {
    let nStringSplit = n.split('')
    let nArraySum = nStringSplit.reduce((a, b) => parseInt(a) + parseInt(b))

    console.log(nStringSplit)

    if (nStringSplit.length <= 1) {
        console.log(n)
        return parseInt(n)
    } else if (k) {
        console.log(n)
        console.log(nArraySum * k)
        return superDigit((nArraySum * k).toString())
    } else {
        console.log(n)
        console.log(nArraySum)
        return superDigit(nArraySum.toString())
    }
}

superDigit('9875', 4)