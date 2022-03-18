function caesarCipher(s, k) {
    let regularAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let regularAlphabetUpper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

    if (k > regularAlphabet.length) {
        k = k % regularAlphabet.length
    }
   
    let caesarAlphabet = regularAlphabet.slice(k).concat(regularAlphabet.slice(0,k))
    let caesarAlphabetUpper = regularAlphabetUpper.slice(k).concat(regularAlphabetUpper.slice(0,k))
    console.log(caesarAlphabet)

    let ans = s.split('').map(letter => {
        if (regularAlphabet.includes(letter) || regularAlphabetUpper.includes(letter)) {
            if (regularAlphabet.includes(letter)) {
                console.log(letter + '->' + caesarAlphabet[regularAlphabet.indexOf(letter)])
                return caesarAlphabet[regularAlphabet.indexOf(letter)]
            } else if (regularAlphabetUpper.includes(letter)) {
                console.log(letter + '->' + caesarAlphabetUpper[regularAlphabetUpper.indexOf(letter)])
                return caesarAlphabetUpper[regularAlphabetUpper.indexOf(letter)]
            }
        } else {
            return letter
        }
    })

    console.log(ans.join(''))

    return ans.join('')
}

caesarCipher('www.abc.xy', 87)