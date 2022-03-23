function processData (input) {
    let queue = []
    let inputSplit = input.split('\n')
    let length = inputSplit[0]
    inputSplit.splice(0,1)

    for (let i = 0; i < length; i++) {
        if (inputSplit[i] === '2') {
            queue.shift()
        } else if (inputSplit[i] === '3') {
            console.log(queue[0])
        } else if (inputSplit[i].split(' ')[0] === '1') {
            queue.push(inputSplit[i].split(' ')[1])
        }
    }

}

let test = '10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2'

processData(test)