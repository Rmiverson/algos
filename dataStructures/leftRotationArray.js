function rotateLeft(d, arr) {
    let rotations = d % arr.length
    let leftArr = arr.slice(0, rotations)
    let rightArr = arr.slice(rotations)
    let ans = rightArr.concat(leftArr)
    return ans
}

rotateLeft(2, [1,2,3,4,5,6])