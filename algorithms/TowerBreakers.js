function towerBreakers(n, m) {
    let loser = 0
    let towers = [...Array(n).fill(m)]

    if (towers.length <= 1) {
        loser = 2       
    }

    function gameTurn(player) {
        let highestIndex = towers.indexOf(Math.max(...towers))
        let highestMultiple = 1
        
        for (let i = 0; i < towers[highestIndex]; i++) {
            if (i > 1 && towers[highestIndex] % i === 0) {
                highestMultiple = towers[highestIndex] / i
                break
            }
        }

        console.log('highestIndexValue: ' + towers[highestIndex])
        console.log('highestMultiple: ' + highestMultiple)

        
        if (towers[highestIndex] === highestMultiple) {
            console.log(towers[highestIndex] === highestMultiple)
            loser = player
        }
        towers[highestIndex] = highestMultiple
    }

    while (loser < 1) {
        
        // p1
        gameTurn(1)
        console.log('loser: ' + loser)
        if (loser < 1) {
            // p2
            gameTurn(2)
            console.log('loser: ' + loser)            
        }
    }

    if (loser === 1) {
        console.log(2)
        return 2
    } else if (loser === 2) {
        console.log(1)
        return 1
    }
}

function towerBreakersCorrect(n,m) {
    if (n % 2 === 0 || m === 1) {
        return 2
    } else return 1
}

towerBreakersCorrect(2,2)