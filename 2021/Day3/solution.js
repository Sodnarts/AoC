const { Console } = require('console');
const fs = require('fs');


// Part One Answer
const partOne = () => {
    const file = fs.readFileSync('Day3/input.txt', 'utf-8')
    const arr = file.split('\n');
    
    let gamma = ""
    let epsilon = ""
   
    for (let i = 0; i < arr[0].length; i++) {
        let zero = 0;
        let one = 0;

        arr.forEach(e => {
            (e.substring(i, i + 1) == "0") ? zero++ : one++;
        })
       
        gamma += (zero > one) ? 0 : 1
        epsilon += (zero > one) ? 1 : 0
    }

    const gammaDecimal = parseInt(gamma, 2)
    const epsilonDecimal = parseInt(epsilon, 2)

    console.log(`PART ONE: The power consumption of the submarine is`, gammaDecimal * epsilonDecimal)
}

// Part Two Answer
const partTwo = () => {
    const file = fs.readFileSync('Day3/input.txt', 'utf-8')
    const arr = file.split('\n');

    let o2 = recursive(arr, 0, 0)
    let co2 = recursive(arr, 0, 1)

    console.log(`PART TWO: The life support rating of the submarine is`, o2 * co2);
}

const recursive = (arr, i, mode) => {
    let zero = 0;
    let one = 0;

    arr.forEach(e => {
        (e.substring(i, i + 1) == "0") ? zero++ : one++;
    })

    const newArr = ((mode == 0) ? zero > one : zero <= one) ? filter(arr, i, "0") : filter(arr, i, "1")

    if (newArr.length > 1) {
        return recursive(newArr, i + 1, mode)
    }
    else return parseInt(newArr[0], 2);
}

const filter = (arr, i, condition) => {
    const newArr = arr.filter(e => e.substring(i, i + 1) == condition)
    return newArr
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