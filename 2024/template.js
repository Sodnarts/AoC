const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day5/input.txt', 'utf-8')
    const arr = file.split('\n');
}

const partTwo = () => {
    const file = fs.readFileSync('Day5/input.txt', 'utf-8')
    const arr = file.split('\n');
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