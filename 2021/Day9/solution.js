const fs = require('fs');


// Part One Answer

// Part Two Answer

let globalSum = [];
let highestBasins = [];

const partOne = () => {
    const file = fs.readFileSync('Day9/input.txt', 'utf-8')
    const arr = file.split('\n').map(a => {
        let tmp = a.split("")
        tmp.unshift(9)
        tmp.push(9);
        return tmp.map(t => parseInt(t, 10))
    });
    arr.push([])
    arr.unshift([])
    for (let i = 0; i < arr[1].length; i++) {
        arr[0].push(9)
        arr[arr.length - 1].push(9)
    }
    const lowPoints = [];
    const lowPointsCoordinates = [];

    for (let i = 1; i < arr.length -1; i++) {
        for (let j = 1; j < arr[0].length - 1; j++) {
            if (
                arr[i][j] < arr[i][j - 1] &&
                arr[i][j] < arr[i][j + 1] &&
                arr[i][j] < arr[i - 1][j] &&
                arr[i][j] < arr[i + 1][j]
            ) {
                lowPoints.push(arr[i][j] + 1)
                lowPointsCoordinates.push([i, j])
            }
        }
    }
    const sum = lowPoints.reduce((acc, a) => acc + a, 0)
    console.log("PART ONE: The sum of all low points is", sum)

    const sum2 = []
    lowPointsCoordinates.forEach((l, i) => {
        globalSum.push([`${l[0]}.${l[1]}`])
        recursive(arr, l[0], l[1], i)
    })

    highestBasins = [globalSum[0].length, globalSum[1].length, globalSum[2].length]
    for (let i = 3; i < globalSum.length; i++) {
        if (globalSum[i].length > highestBasins[0]) {
            highestBasins[0] = globalSum[i].length;
        }
        highestBasins = highestBasins.sort((a, b) => a-b)
    }

    globalSum.forEach(g => {
        if (g.length > 100) 
            console.log(g.length)
    })
    console.log(highestBasins)
    console.log("PART TWO: By multiplying the three highest basins we get", highestBasins[0] * highestBasins[1] * highestBasins[2]);
}

const recursive = (arr, i, j, k) => {
    if (arr[i][j] < arr[i][j - 1] && arr[i][j - 1] != 9) {
        if (!globalSum[k].includes(`${i}.${j - 1}`)) {
            globalSum[k].push(`${i}.${j - 1}`);
            recursive(arr, i, j - 1, k)
        }
    }
    if (arr[i][j] < arr[i][j + 1] && arr[i][j + 1] != 9) {
        if (!globalSum[k].includes(`${i}.${j + 1}`)) {
            globalSum[k].push(`${i}.${j + 1}`);
            recursive(arr, i, j + 1, k)
        }
    }
    if (arr[i][j] < arr[i - 1][j] && arr[i - 1][j] != 9) {
        if (!globalSum[k].includes(`${i - 1}.${j}`)) {
            globalSum[k].push(`${i - 1}.${j}`);
            recursive(arr, i - 1, j, k)
        }
    }
    if (arr[i][j] < arr[i + 1][j] && arr[i + 1][j] != 9) {
        if (!globalSum[k].includes(`${i + 1}.${j}`)) {
            globalSum[k].push(`${i + 1}.${j}`);
            recursive(arr, i + 1, j, k)
        }
    }
}
//0123442122
//012344212

const partTwo = () => {
    const file = fs.readFileSync('Day9/input.txt', 'utf-8')
    const arr = file.split('\n');
}


// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY NINE ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();