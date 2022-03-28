const input = require("./input.js")

const inp = input();

// Part One Answer
let treesEncountered = 0;

//Part Two Answer
let trees = [0, 0, 0, 0, 0, 0];

const partOne = () => {
    for (let i = 0; i < inp.length; i++) {
        const pos = (i * 3) % 31;

        if (inp[i].charAt(pos) == "#") {
            treesEncountered++;
        } 
    }
    console.log("PART ONE: By traversing the slope at an angle of 3 right, then 1 down, you will encounter a total of", treesEncountered, "trees");
}

const partTwo = () => {
    const angles = [1, 3, 5, 7];

    for (let j = 0; j < angles.length; j++) {
        for (let i = 0; i < inp.length; i++) {
            let pos = (i * angles[j]) % 31;
            if (inp[i].charAt(pos) == "#") {
                trees[j]++;
            } 
        }
    }

    let k = 0;
    for (let i = 0; i < inp.length; i += 2) {
        let pos = (i / 2) % 31;

        if (inp[i].charAt(pos) == "#") {
            trees[4]++;
        } 
        k++;
    }
    console.log("PART TWO: By traversing at the angles 1, 3, 5, 7 and 1 right, and 1, 1, 1, 1 and 2 down, you will encounter", trees[0], trees[1], trees[2], trees[3], "and", trees[4], "trees respectively. Multiplicatively this gives", trees[0] * trees[1] * trees[2] * trees[3] * trees[4]);
}


// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY THREE ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();