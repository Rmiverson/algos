//reverse an array

function reverseArray(a) {
    let newArray = []

    for (let i = a.length - 1; i >= 0; i--) {
        newArray.push(a[i])
    }

    console.log(newArray)
}

let sampleArray = [1,2,3,4]

reverseArray(sampleArray)