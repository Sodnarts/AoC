const fs = require('fs');


// Part One Answer
const partOne = () => {
    const file = fs.readFileSync('Day1/input.txt', 'utf-8')
    const arr = file.split('\n');
    let totalIncreases = 0;
    for (let i = 1; i < arr.length; i++) {
        if (parseInt(arr[i], 10) > parseInt(arr[i-1], 10)) {
            totalIncreases++;
        }
    }
        console.log('PART ONE: Depth measurement increased', parseInt(totalIncreases, 10), 'times');
}

// Part Two Answer
const partTwo = () => {
    const file = fs.readFileSync('Day1/input.txt', 'utf-8')
    const arr = file.split('\n');

    let totalIncreases = 0;
    let currentMeasurement = 0;
    let previousMeasurement;
    for (let i = 0; i < arr.length - 2; i++) {
        currentMeasurement = parseInt(arr[i], 10) + parseInt(arr[i + 1], 10) + parseInt(arr[i + 2], 10);

        if (currentMeasurement > previousMeasurement) totalIncreases++;

        previousMeasurement = currentMeasurement;
    }
    
    console.log('PART TWO: Depth measurement increased', parseInt(totalIncreases, 10), 'times');
}


// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY ONE ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();