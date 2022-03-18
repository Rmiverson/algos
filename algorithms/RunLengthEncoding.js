// take a string like 'aaabbcca' and turn it into 3a2b2c1a

function encoder(str) {
    let output = [] // '3a', '2b'

    let lastValue = null
    let valueCounter = 0
    for (let i = 0; i < str.length + 1; i++) {
        if (lastValue === null) {
            lastValue = str[i]
            valueCounter++
        } else if (lastValue === str[i]) {
            valueCounter++
        } else {
            output.push(valueCounter + lastValue)
            lastValue = str[i]
            valueCounter = 1
        }
    }
    console.log('output:' + output.join(''))
}

encoder('aaabbcca')