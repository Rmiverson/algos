// simple merge sort for future reference

const merge = (left, right) => {
    let sortedArr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift()) //removes the value in the first spot in left and places it in sortedArr
        } else {
            sortedArr.push(right.shift())
        }
    }

    return [...sortedArr, ...left, ...right]
}

const mergeSort = (arr) => {
    const half = arr.length / 2

    if (arr.length <= 1) {
        return arr
    }

    const left = arr.splice(0, half)
    const right = arr
    return merge(mergeSort(left), mergeSort(right))
}

const ex = [2, 3, 7, 9, 100, 2]

console.log(mergeSort(ex))