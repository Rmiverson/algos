// Thank you to Jovana LLin for this elegent answer
function minimumBribes(q) {
    let bribes = 0

    for (let i = q.length - 1; i >= 0 ; i--) {
        if ((q[i] - i) > 3) {
            console.log('Too chaotic')
            return
        }

        for (let j = q[i] - 2; j < i; j++) {
            if (q[j] > q[i]) {
                bribes++
            }
        }
    }

    console.log(bribes)        
}

minimumBribes([1,2,5,3,7,8,6,4])