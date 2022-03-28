const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day4/input.txt', 'utf-8')
    const arr = file.split('\n');

    const bingoNumbers = arr[0].split(",");
    arr.shift(); arr.shift();
    let boards = arr.join('\n').split('\n\n').map(b => b.split('\n'))
    let d = 0;
    let firsTime = true;
    let indices = [];
    let winners = [];
    boards = boards.map(b => {
        let newB = b.map(l => {
            let nr = replaceAll(l, '  ', ' ').trim();
            let numbers = nr.split(' ');
            return numbers;
        })
        return newB;
    })

    bingoNumbers.map(bn => {
        boards = boards.map((b, index1) => {
            let newB = b.map((l, index2) => {
                let numbers = l.filter((n, index3) => {
                    let num = parseInt(n, 10);
                    d++;
                    return (n !== bn)
                })
                if (numbers.length < 1 && firsTime) {
                    firsTime = false;
                    let score = calculateWinnerScore(b, bn);
                    let contains = false;
                    indices.forEach(i => {
                        if (i == index1) {
                            contains = true;
                        }
                    })
                    if (!contains) {
                        winners.push(score);
                        indices.push(index1)
                    }
                    console.log("PART ONE: The score of the winning bingo board is ", score)
                } else if (numbers.length < 1) {
                    let score = calculateWinnerScore(b, bn);
                    let contains = false;
                    indices.forEach(i => {
                        if (i == index1) {
                            contains = true;
                        }
                    })
                    if (!contains) {
                        winners.push(score);
                        indices.push(index1)
                    }
                }
                return numbers;
            })
            return newB;
        })
    })
    console.log(winners)
    console.log(winners[winners.length - 1])
}

const calculateWinnerScore = (board, bingoNumber) => {
    let totalSum = 0;
    board.forEach(line => {
        line.forEach(number => {
            totalSum += (number != bingoNumber) ?  parseInt(number, 10) : 0
        })
    })
    return totalSum * bingoNumber
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, match, replacement){
    return str.replace(new RegExp(escapeRegExp(match), 'g'), ()=>replacement);
}

const partTwo = () => {
    const file = fs.readFileSync('Day4/input.txt', 'utf-8')
    const arr = file.split('\n');
}


// Setup
const startTime = Date.now()

const preScript = () => {
    console.log('\n\n---------------- DAY FOUR ----------------')
}

const postScript = () => {
    const endTime = Date.now();
    console.log('Completed in ', endTime - startTime, 'ms');
}

preScript();
partOne();
partTwo();
postScript();