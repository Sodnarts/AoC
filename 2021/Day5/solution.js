const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day5/input.txt', 'utf-8')
    const arr = file.split('\n');
  
    const matrix = createMatrix(1000)
    
    arr.forEach(e => {
        const coordinates = e.split(' -> ')
        const c1 = coordinates[0].split(',');
        const c2 = coordinates[1].split(',');
        const x1 = parseInt(c1[0], 10);
        const y1 = parseInt(c1[1], 10);
        const x2 = parseInt(c2[0], 10);
        const y2 = parseInt(c2[1], 10);

        let positions = [];
        if (x1 == x2) {
            positions = (y1 < y2) ? loop(y1, y2) : loop(y2, y1)
            positions.forEach(p => {
                matrix[p][x1] = matrix[p][x1] + 1;
            })
        } else if (y1 == y2) {
            positions = (x1 < x2) ? loop(x1, x2) : loop(x2, x1)
            positions.forEach(p => {
                matrix[y1][p] = matrix[y1][p] + 1;
            })
        }
    })

    let totalCount = 0;
    matrix.forEach(m => {
        m.forEach(n => {
            totalCount += (n > 1) ? 1 : 0
        })
    })
    console.log("PART ONE: The lines intersect a total of", totalCount, "times")
}

const partTwo = () => {
    const file = fs.readFileSync('Day5/input.txt', 'utf-8')
    const arr = file.split('\n');

    const matrix = createMatrix(1000)
    
    arr.forEach(e => {
        const coordinates = e.split(' -> ')
        const c1 = coordinates[0].split(',');
        const c2 = coordinates[1].split(',');
        const x1 = parseInt(c1[0], 10);
        const y1 = parseInt(c1[1], 10);
        const x2 = parseInt(c2[0], 10);
        const y2 = parseInt(c2[1], 10);

        let positions = [];
        if (x1 == x2) {
            positions = (y1 < y2) ? loop(y1, y2) : loop(y2, y1)
            positions.forEach(p => {
                matrix[p][x1] = matrix[p][x1] + 1;
            })
        } else if (y1 == y2) {
            positions = (x1 < x2) ? loop(x1, x2) : loop(x2, x1)
            positions.forEach(p => {
                matrix[y1][p] = matrix[y1][p] + 1;
            })
        } else {
            let xPositions = (x1 < x2) ? loop(x1, x2) : loopNegative(x2, x1)
            let yPositions = (y1 < y2) ? loop(y1, y2) : loopNegative(y2, y1)
            for (let i = 0; i < xPositions.length; i++) {
                matrix[yPositions[i]][xPositions[i]] = matrix[yPositions[i]][xPositions[i]] + 1;
            }
        }
    })

    let totalCount = 0;
    matrix.forEach(m => {
        m.forEach(n => {
            totalCount += (n > 1) ? 1 : 0
        })
    })
    console.log("PART TWO: The lines intersect a total of", totalCount, "times")
}

const createMatrix = (size) => {
    const matrix = [];
    for (let i = 0; i < size; i++) {
        matrix.push([])
        for (let j = 0; j < size; j++) {
            matrix[i].push(0)
        }
    }
    return matrix;
}

const loop = (c1, c2) => {
    const coordinates = [];
    for (let i = c1; i <= c2; i++) {
        coordinates.push(i);
    }
    return coordinates;
}

const loopNegative = (c2, c1) => {
    const coordinates = [];
    for (let i = c1; i >= c2; i--) {
        coordinates.push(i);
    }
    return coordinates;
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