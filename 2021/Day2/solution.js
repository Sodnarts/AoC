const fs = require('fs');


// Part One Answer
const partOne = () => {
    const file = fs.readFileSync('Day2/input.txt', 'utf-8')
    const arr = file.split('\n');

    let x = 0;
    let y = 0;

    arr.forEach((e) => {
        const tmp = e.split(' ');
        const direction = tmp[0];
        const distance = parseInt(tmp[1], 10);


        switch (direction) {
            case 'forward':
                x += distance
                break;
            case 'down':
                y += distance
                break;
            case 'up':
                y -= distance
                break;        
        }

    })
    console.log(`PART ONE: Multiplying the horizontal position (${x}) with the depth (${y}) gives us a value of `, x * y);
}

// Part Two Answer
const partTwo = () => {
    const file = fs.readFileSync('Day2/input.txt', 'utf-8')
    const arr = file.split('\n');

    let aim = 0;
    let x = 0;
    let y = 0;

    arr.forEach((e) => {
        const tmp = e.split(' ');
        const direction = tmp[0];
        const distance = parseInt(tmp[1], 10);


        switch (direction) {
            case 'forward':
                x += distance
                y += aim * distance;
                break;
            case 'down':
                aim += distance
                break;
            case 'up':
                aim -= distance
                break;        
        }

    })
    console.log(`PART TWO: Multiplying the horizontal position (${x}) with the depth (${y}) gives us a value of `, x * y);
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