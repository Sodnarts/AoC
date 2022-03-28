const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day17/input.txt', 'utf-8')
    const arr = file.split('\n').map((x) => x.trim().split(''));;
    
    console.log("PART ONE: The amount of Cubes in ON-position is", solve(arr, false));
}

const partTwo = () => {
    const file = fs.readFileSync('Day17/input.txt', 'utf-8')
    const arr = file.split('\n').map((x) => x.trim().split(''));;

    console.log("PART ONE: The amount of Cubes in ON-position is", solve(arr, true));
}
const solve = (input, isPartTwo) => {
    let map = {};
    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[0].length; x++) {
            if (input[y][x] === '#') {
                map[`${x},${y},0,0`] = true;
            }
        }
    }
    let height = [0, input.length];
    let width = [0, input[0].length];
    let depth = [0, 1];
    let hyper = [0, 1];
    for (let t = 0; t < 6; t++) {
        let newMap = {};
        depth[0]--;
        depth[1]++;
        width[0]--;
        width[1]++;
        height[0]--;
        height[1]++;
        if (isPartTwo) {
            hyper[0]--;
            hyper[1]++;
        }
        for (let w = hyper[0]; w < hyper[1]; w++) {
            for (let z = depth[0]; z < depth[1]; z++) {
                for (let y = width[0]; y < width[1]; y++) {
                    for (let x = height[0]; x < height[1]; x++) {
                        let neigh = countAround(x, y, z, w, map, isPartTwo);
                        const isActive = map[`${x},${y},${z},${w}`];
                        if (neigh === 3 || (neigh === 2 && isActive)) {
                            newMap[`${x},${y},${z},${w}`] = true;
                        }
                    }
                }
            }
        }

        map = newMap;
    }
    return Object.keys(map).length;
}

const countAround = (x, y, z, w, map, isPartTwo) => {
    let count = 0;
    for (let ww = (isPartTwo ? w - 1 : 0); ww <= (isPartTwo ? w + 1 : 0); ww++) {
        for (let zz = z - 1; zz <= z + 1; zz++) {
            for (let yy = y - 1; yy <= y + 1; yy++) {
                for (let xx = x - 1; xx <= x + 1; xx++) {
                    if ((xx !== x || yy !== y || zz !== z || ww !== w) && map[`${xx},${yy},${zz},${ww}`]) {
                        count++;
                    }
                }
            }
        }
    }
    return count;
}

// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY SEVENTEEN ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();