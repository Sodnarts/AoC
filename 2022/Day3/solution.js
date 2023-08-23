const fs = require('fs');

const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Part One Answer
const partOne = () => {
    const file = fs.readFileSync('Day3/input.txt', 'utf-8')
    const arr = file.split('\n');
    
    let sum = 0;

    arr.forEach(a => {
        let first = a.substring(0, a.length/2);
        let second = a.substring(a.length/2, a.length);
        let char = null;

        first.split("").forEach(c => {
            second.search(c) > -1 && (char = c)
        })
        
        sum += priorities.search(char) + 1;
    })

    console.log("PART ONE: The total sum of priorities is ", sum)
}

// Part Two Answer
const partTwo = () => {
    const file = fs.readFileSync('Day3/input.txt', 'utf-8')
    const arr = file.split('\n');

    let sum = 0;

    for (let i = 0; i < arr.length; i = i + 3) {
        let e1 = arr[i]
        let e2 = arr[i + 1]
        let e3 = arr[i + 2]
        let char = null;

        e1.split("").forEach(c => {
            let s2 = e2.search(c);
            let s3 = e3.search(c);
            s2 > -1 && s3 > -1 && (char = c);
        })

        sum += priorities.search(char) + 1;
    }

    console.log("PART TWO: The total sum of priorities is ", sum)
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