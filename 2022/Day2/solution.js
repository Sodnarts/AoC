const fs = require('fs');

const ROCK = 1, PAPER = 2, SCISSOR = 3, LOSS = 0, DRAW = 3, WIN = 6;



// Part One Answer
const partOne = () => {
    const file = fs.readFileSync('Day2/input.txt', 'utf-8')
    const arr = file.split('\n');

    let score = 0;
    
    arr.forEach((a) => {
        let selections = a.split(" ")
        if (selections[0] === "A") {
            if (selections[1] === "X") {
                score += DRAW + ROCK
            } else if (selections[1] === "Y") {
                score += WIN + PAPER
            } else if (selections[1] === "Z") {
                score += LOSS + SCISSOR
            }
        } else if (selections[0] === "B") {
            if (selections[1] === "X") {
                score += LOSS + ROCK
            } else if (selections[1] === "Y") {
                score += DRAW + PAPER
            } else if (selections[1] === "Z") {
                score += WIN + SCISSOR
            }
        } else if (selections[0] === "C") {
            if (selections[1] === "X") {
                score += WIN + ROCK
            } else if (selections[1] === "Y") {
                score += LOSS + PAPER
            } else if (selections[1] === "Z") {
                score += DRAW + SCISSOR
            }
        }
    })
    console.log("PART ONE: Using the encrypted strategy, I get a total score of ", score, " in the Rock, Paper, Scissors tournament")
}

// Part Two Answer
const partTwo = () => {
    const file = fs.readFileSync('Day2/input.txt', 'utf-8')
    const arr = file.split('\n');

    let score = 0;
    // A, X = Rock
    // B, Y = PAPER
    // C, Z = SCISSORS

    arr.forEach((a) => {
        let selections = a.split(" ")
        if (selections[0] === "A") {
            if (selections[1] === "X") {
                score += LOSS + SCISSOR
            } else if (selections[1] === "Y") {
                score += DRAW + ROCK
            } else if (selections[1] === "Z") {
                score += WIN + PAPER
            }
        } else if (selections[0] === "B") {
            if (selections[1] === "X") {
                score += LOSS + ROCK
            } else if (selections[1] === "Y") {
                score += DRAW + PAPER
            } else if (selections[1] === "Z") {
                score += WIN + SCISSOR
            }
        } else if (selections[0] === "C") {
            if (selections[1] === "X") {
                score += LOSS + PAPER
            } else if (selections[1] === "Y") {
                score += DRAW + SCISSOR
            } else if (selections[1] === "Z") {
                score += WIN + ROCK
            }
        }
    })
    console.log("PART TWO: Using the encrypted strategy, I get a total score of ", score, " in the Rock, Paper, Scissors tournament")
}


// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY TWO ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();