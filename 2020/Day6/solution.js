const fs = require('fs');

// Part One Answer
let answer = 0;

// Part Two Answer
let answer2 = 0;

const partOne = () => {
    const file = fs.readFileSync('Day6/input.js', 'utf-8')
    const groups = file.split('\n\n');

    for (let g = 0; g < groups.length; g++) {
        const members = groups[g].split('\n');
        let totalString = "";

        for (let m = 0; m < members.length; m++) {
            for (let s = 0; s < members[m].length; s++) {
                if (!totalString.includes(members[m][s])) {
                    totalString += members[m][s];
                }
            }
        }

        answer += totalString.length;
    }

    console.log("PART ONE: The amount of unique YES-answers per group adds up to", answer, "amongst all groups");
}

const partTwo = () => {
    const file = fs.readFileSync('Day6/input.js', 'utf-8')
    const groups = file.split('\n\n');

    for (let g = 0; g < groups.length; g++) {
        const members = groups[g].split('\n');
        let startingString = members[0];
        let newString = "";

        
        for (let m = 1; m < members.length; m++) {
            for (let s = 0; s < members[m].length; s++) {
                if (startingString.includes(members[m][s])) {
                    newString += members[m][s];
                }
            }
            startingString = newString
            newString = "";
        }

        answer2 += startingString.length;
    }

    console.log("PART TWO: The amount of unique YES-answers per group adds up to", answer2, "amongst all groups");
}


// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY SIX ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();