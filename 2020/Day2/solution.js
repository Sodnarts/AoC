const input = require("./input.js")

const inp = input();
const min = inp.min;
const max = inp.max;
const char = inp.char;
const pass = inp.pass;

// Part One Answer
let valid = 0;

// Part Two Answer
let valid2 = 0;

const partOne = () => {
    for (let i = 0; i < min.length; i++) {
        let numOfCharacter = (pass[i].split(char[i]).length - 1);
        if (numOfCharacter >= min[i] && numOfCharacter <= max[i]) {
            valid++;
        }
    }

    console.log("PART ONE: The number of valid passwords is ", valid);
}

const partTwo = () => {
    for (let i = 0; i < min.length; i++) {
        if (pass[i].charAt(min[i] - 1) == char[i] && pass[i].charAt(max[i] - 1) != char[i]) {
            valid2++;
        } 
        if (pass[i].charAt(min[i] - 1) != char[i] && pass[i].charAt(max[i] - 1) == char[i]) {
            valid2++;
        }
    }
    console.log("PART TWO: The number of valid passwords is ", valid2)
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