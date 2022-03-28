const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day11/input.txt', 'utf-8')
    let arr = file.split('\n');
    let arr2 = [...arr];
    let noChanges = true;

    while (noChanges) {
        noChanges = false;

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] == "L" && checkAdjacent(arr, i, j) == 0) {
                    arr2[i] = arr2[i].replaceAt(j, "#");
                    noChanges = true;
                }
            }
        }
        arr = [...arr2]
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] == "#" && checkAdjacent(arr, i, j) >= 4) {
                    arr2[i] = arr2[i].replaceAt(j, "L");
                    noChanges = true;
                }
            }
        }
        arr = [...arr2]
    }   

    let occupiedSeats = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == "#") {
                occupiedSeats++;
            }
        }
    }
    console.log("PART ONE: The number of occupid seats is",occupiedSeats);
}

const partTwo = () => {
    const file = fs.readFileSync('Day11/input.txt', 'utf-8')
    let arr = file.split('\n');
    let arr2 = [...arr];
    let noChanges = true;

    while (noChanges) {
        noChanges = false;

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] == "L" && checkAdjacent2(arr, i, j) == 0) {
                    arr2[i] = arr2[i].replaceAt(j, "#");
                    noChanges = true;
                }
            }
        }
        arr = [...arr2]
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] == "#" && checkAdjacent2(arr, i, j) >= 5) {
                    arr2[i] = arr2[i].replaceAt(j, "L");
                    noChanges = true;
                }
            }
        }
        arr = [...arr2]
    }   

    let occupiedSeats = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == "#") {
                occupiedSeats++;
            }
        }
    }
    console.log("PART TWO: The number of occupid seats is",occupiedSeats);
}

const checkAdjacent = (arr, i ,j) => {
    let shouldBeOccupied = 0;
    
    if (j > 0 && arr[i][j - 1] == "#") {
        shouldBeOccupied++;
    }
    if (j < arr[i].length && arr[i][j + 1] == "#") {
        shouldBeOccupied++;
    }
    if (j > 0 && i > 0 && arr[i - 1][j - 1] == "#") {
        shouldBeOccupied++;
    }
    if (i > 0 && arr[i - 1][j] == "#") {
        shouldBeOccupied++;
    }
    if (i > 0 && arr[i - 1][j + 1] == "#") {
        shouldBeOccupied++;
    }
    if (i < arr.length - 1 && j > 0 && arr[i + 1][j - 1] == "#") {
        shouldBeOccupied++;
    }
    if (i < arr.length - 1 && arr[i + 1][j] == "#") {
        shouldBeOccupied++;
    }
    if (i < arr.length - 1 && j < arr[i].length && arr[i + 1][j + 1] == "#") {
        shouldBeOccupied++;
    }
    return shouldBeOccupied;
}

const checkAdjacent2 = (arr, i ,j) => {
    let shouldBeOccupied = 0;
    
    let shouldContinue1 = true;
    for (let k = 1; k <= j; k++) {
        if (j > 0 && arr[i][j - k] == "#" && shouldContinue1) {
            shouldBeOccupied++;
            shouldContinue1 = false;
        }
        if (j > 0 && arr[i][j - k] == "L" && shouldContinue1) {
            shouldContinue1 = false;
        }
    }
    let shouldContinue2 = true;
    for (let k = 1; k <= arr[i].length - j; k++) {
        if (j < arr[i].length && arr[i][j + k] == "#" && shouldContinue2) {
            shouldBeOccupied++;
            shouldContinue2 = false;
        }
        if (j < arr[i].length && arr[i][j + k] == "L" && shouldContinue2) {
            shouldContinue2 = false;
        }
    }
    let shouldContinue3 = true;
    for (let k = 1; k <= arr.length; k++) {
        if (j > 0 && i >= k && arr[i - k][j - k] == "#" && shouldContinue3) {
            shouldBeOccupied++;
            shouldContinue3 = false;
        }
        if (j > 0 && i >= k && arr[i - k][j - k] == "L" && shouldContinue3) {
            shouldContinue3 = false;
        }
    }
    let shouldContinue4 = true;
    for (let k = 1; k <= arr.length; k++) {
        if (i >= k && arr[i - k][j] == "#" && shouldContinue4) {
            shouldBeOccupied++;
            shouldContinue4 = false;
        }
        if (i >= k && arr[i - k][j] == "L" && shouldContinue4) {
            shouldContinue4 = false;
        }
    }
    let shouldContinue5 = true;
    for (let k = 1; k <= arr[i].length; k++) {
        if (i >= k && arr[i - k][j + k] == "#" && shouldContinue5) {
            shouldBeOccupied++;
            shouldContinue5 = false;
        }
        if (i > k && arr[i - k][j + k] == "L" && shouldContinue5) {
            shouldContinue5 = false;
        }
    }
    let shouldContinue6 = true;
    for (let k = 1; k <= arr.length; k++) {
        if (i < arr.length - k && j > 0 && arr[i + k][j - k] == "#" && shouldContinue6) {
            shouldBeOccupied++;
            shouldContinue6 = false;
        }
        if (i < arr.length - k && j > 0 && arr[i + k][j - k] == "L" && shouldContinue6) {
            shouldContinue6 = false;
        }
    }
    let shouldContinue7 = true;
    for (let k = 1; k <= arr[i].length; k++) {
        if (i < arr.length - k && arr[i + k][j] == "#" && shouldContinue7) {
            shouldBeOccupied++;
            shouldContinue7 = false;
        }
        if (i < arr.length - k && arr[i + k][j] == "L" && shouldContinue7) {
            shouldContinue7 = false;
        }
    }
    let shouldContinue8 = true;
    for (let k = 1; k <= arr[i].length; k++) {
        if (i < arr.length - k && arr[i + k][j + k] == "#" && shouldContinue8) {
            shouldBeOccupied++;
            shouldContinue8 = false;
        }
        if (i < arr.length - k && arr[i + k][j + k] == "L" && shouldContinue8) {
            shouldContinue8 = false;
        }
    }
    return shouldBeOccupied;
}
const file = fs.readFileSync('Day11/input.txt', 'utf-8')
let arr = file.split('\n');
//checkAdjacent2(arr, 4, 6);

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY ELEVEN ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();