// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = (arr) => {
    let l = arr.slice(arr.length / 2)
    let r = arr.slice(0, arr.length / 2)

    if (l.length !== r.length) {
        return false
    } else {
        r.reverse()
        for (let i = 0; i < l.length; i++) {
            if (l[i] !== r[i]) {
                return false
            }
        }
    }
    return true
}

let largest = 0

for (let i = 999; i > 100; i--) {
    for (let j = 999; j > 100; j--) {
        let num = i * j
        let numParsed = String(num).split('')
        // console.log(num)
        if (isPalindrome(numParsed)) {
            if (num > largest) {
                console.log(i, j)
                console.log(num)
                largest = num                
            }
        }
    }
}



// isPalindrome(['1','2','2','1'])