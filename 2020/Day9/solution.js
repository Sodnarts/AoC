const fs = require('fs');

// Part One Answer
let answer1 = 0;

const partOne = () => {
    const file = fs.readFileSync('Day9/input.js', 'utf-8')
    const arr = file.split('\n');
    const hasVisited = [];

    for (let i = 25; i < arr.length; i++) {
        let hasBeenFound = false;
        for (let j = i - 25; j < i; j++) {
            for (let k= i - 25; k < i; k++) {
                if ((parseInt(arr[k], 10) + parseInt(arr[j], 10)) == parseInt(arr[i], 10) ) {
                    hasBeenFound = true;
                }
               
            }
        }
        if (!hasBeenFound && !hasVisited.includes(arr[i])) {
            hasVisited.push(arr[i]);
            answer1 = arr[i];
            console.log("PART ONE: The first number that is not a sum of the previous 25 numbers is", answer1);
        }
    }
}

const partTwo = () => {
    const file = fs.readFileSync('Day9/input.js', 'utf-8')
    const arr = file.split('\n');

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let newSum = 0;
        let j = i;
        while ((sum <= parseInt(answer1, 10))) {
            if (sum + parseInt(arr[j], 10) <= answer1) {
                newSum = sum + parseInt(arr[j], 10);
            }
            sum += parseInt(arr[j], 10);
            j++;
            if (newSum == answer1) {
                const tmpArr = [];
                for (let k = i; k < j; k++) {
                   tmpArr.push(parseInt(arr[k], 10));
                }
                tmpArr.sort((a, b) => a - b);
                console.log("PART TWO: Adding together the smallet and largest numbers in the range", i, "-", j,"gives us", tmpArr[0] + tmpArr[tmpArr.length - 1]);
                return;
            }
        }
    }
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