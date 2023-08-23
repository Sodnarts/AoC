const fs = require('fs');



const partOne = () => {
    const file = fs.readFileSync('Day13/input.txt', 'utf-8')
    const pairs = file.split('\n\n')

    pairs.forEach(pair => {
      p1 = pair.split("\n")[0];
      p2 = pair.split("\n")[1];
    })
    console.log("PART ONE: The total syntax checking score is ")
}

const partTwo = () => {
    const file = fs.readFileSync('Day13/input.txt', 'utf-8')
    const arr = file.split('\n')
    console.log("PART TWO: The winning score is ")
}

// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY THIRTEEN ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();
