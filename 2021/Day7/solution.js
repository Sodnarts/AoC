const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day7/input.txt', 'utf-8')
    const arr = file.split(',').map(a => parseInt(a, 10));

    let highestValue = 0;
    let steps = [];
    arr.forEach(a => highestValue = (a > highestValue) ? a : highestValue)

    for (let i = 0; i < highestValue; i++) {
        steps[i] = 0;
        arr.forEach(a => {
            steps[i] += (a > i) ? a - i : i - a

        })
    }
    let minimumSteps = steps[1]
    steps.forEach(s => minimumSteps = (s < minimumSteps) ? s : minimumSteps)
    console.log("PART ONE: The mimimum steps to horisontally align is", minimumSteps)
}

const partTwo = () => {
    const file = fs.readFileSync('Day7/input.txt', 'utf-8')
    const arr = file.split(',').map(a => parseInt(a, 10));

    let highestValue = 0;
    let steps = [];
    arr.forEach(a => highestValue = (a > highestValue) ? a : highestValue)

    for (let i = 0; i < highestValue; i++) {
        steps[i] = 0;
        arr.forEach(a => {
            let diff = (a > i) ? a - i : i - a
            let fuel = 0;
            for (let i = 1; i <= diff; i++) {
                fuel += i;
            }
            steps[i] += fuel;
        })
    }
    let minimumSteps = steps[1]
    steps.forEach(s => minimumSteps = (s < minimumSteps) ? s : minimumSteps)
    console.log("PART TWO: The mimimum steps to horisontally align is", minimumSteps)
}


// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY SEVEN ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();