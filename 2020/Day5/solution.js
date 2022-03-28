const fs = require('fs');

// Part One Answer
let highestId = 0;

const partOne = () => {
    const file = fs.readFileSync('Day5/input.js', 'utf-8')
    const arr = file.split('\n');

    for (let i = 0; i < arr.length; i++) {

        // Find row
        let row = 0;
        let minRow = 0;
        let maxRow = 127;
        for (let j = 0; j < 7; j++) {
            if (j == 6) {
                if (arr[i].charAt(j) === 'F') row = minRow;
                if (arr[i].charAt(j) === 'B') row = maxRow;
            } else {
                if (arr[i].charAt(j) === 'F') {
                    maxRow = Math.floor(minRow + ((maxRow - minRow) / 2));
                } else if (arr[i].charAt(j) === 'B') {
                    minRow = Math.ceil(minRow + ((maxRow - minRow) / 2));
                }
            }
        }

        // Find seat
        let seat = 0;
        let minSeat = 0;
        let maxSeat = 7;
        for (let j = 7; j < 10; j++) {
            if (j == 9) {
                if (arr[i].charAt(j) === 'L') seat = minSeat;
                if (arr[i].charAt(j) === 'R') seat = maxSeat;
            } else {
                if (arr[i].charAt(j) === 'L') {
                    maxSeat = Math.floor(minSeat + ((maxSeat - minSeat) / 2));
                } else if (arr[i].charAt(j) === 'R') {
                    minSeat = Math.ceil(minSeat + ((maxSeat - minSeat) / 2));
                }
            }
        }

        const id = row * 8 + seat;
        if (id > highestId) highestId = id;
    }

    console.log("PART ONE: The highest Boarding Pass ID is", highestId);
}

const partTwo = () => {
    const file = fs.readFileSync('Day5/input.js', 'utf-8')
    const arr = file.split('\n');
    const idArray = [];

    for (let i = 0; i < arr.length; i++) {
        // Find row
        let row = 0;
        let minRow = 0;
        let maxRow = 127;
        for (let j = 0; j < 7; j++) {
            if (j == 6) {
                if (arr[i].charAt(j) === 'F') row = minRow;
                if (arr[i].charAt(j) === 'B') row = maxRow;
            } else {
                if (arr[i].charAt(j) === 'F') {
                    maxRow = Math.floor(minRow + ((maxRow - minRow) / 2));
                } else if (arr[i].charAt(j) === 'B') {
                    minRow = Math.ceil(minRow + ((maxRow - minRow) / 2));
                }
            }
        }

        // Find seat
        let seat = 0;
        let minSeat = 0;
        let maxSeat = 7;
        for (let j = 7; j < 10; j++) {
            if (j == 9) {
                if (arr[i].charAt(j) === 'L') seat = minSeat;
                if (arr[i].charAt(j) === 'R') seat = maxSeat;
            } else {
                if (arr[i].charAt(j) === 'L') {
                    maxSeat = Math.floor(minSeat + ((maxSeat - minSeat) / 2));
                } else if (arr[i].charAt(j) === 'R') {
                    minSeat = Math.ceil(minSeat + ((maxSeat - minSeat) / 2));
                }
            }
        }

        idArray.push(row * 8 + seat);
    }
    idArray.sort((a, b) => a - b);

    let seatID = 0;
    
    for (let i = 0; i < idArray.length; i++) {
        if (idArray[i] + 2 == idArray[i+1]) {
            seatID = idArray[i] + 1;
        }
    }
    console.log("PART TWO: My seat ID is", seatID);
}


// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY FIVE ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();