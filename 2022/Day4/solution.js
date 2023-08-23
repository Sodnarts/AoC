const fs = require('fs');

const partOne = () => {
    const file = fs.readFileSync('Day4/input.txt', 'utf-8')
    const arr = file.split('\n');
    
    let overlaps = 0;

    arr.forEach(a => {
        const pair = a.split(",");
        const range1 = pair[0].split("-").map(r => parseInt(r, 10));
        const range2 = pair[1].split("-").map(r => parseInt(r, 10));

        if (range1[0] <= range2[0] && range1[1] >= range2[1]) overlaps++
        else if (range1[0] >= range2[0] && range1[1] <= range2[1]) overlaps++;

    })

    console.log("PART ONE: The total number of overlaps is ", overlaps)
}

const partTwo = () => {
    const file = fs.readFileSync('Day4/input.txt', 'utf-8')
    const arr = file.split('\n');
    
    let overlaps = 0;

    arr.forEach(a => {
        const pair = a.split(",");
        const range1 = pair[0].split("-").map(r => parseInt(r, 10));
        const range2 = pair[1].split("-").map(r => parseInt(r, 10));

        if (range1[0] >= range2[0] && range1[0] <= range2[1]) overlaps++;
        else if (range1[1] >= range2[0] && range1[1] <= range2[1]) overlaps++;
        else if (range2[1] >= range1[0] && range2[1] <= range1[1]) overlaps++;
    })

    console.log("PART TWO: The total number of overlaps is ", overlaps)
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