const fs = require('fs');

const partOne = () => {
    const file = fs.readFileSync('Day10/input.js', 'utf-8')
    const arr = file.split('\n');
    let diff1 = 1;
    let diff3 = 1;
    
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i], 10) + 1 == parseInt(arr[i+1], 10)) {
            diff1++;
        }
        if (parseInt(arr[i], 10) + 3 == parseInt(arr[i+1], 10)) {
            diff3++;
        }
    }
    console.log("PART ONE: There is", diff1, "1-jolts differences and", diff3, "3-jolts differences. Multiplicatively this gives us", diff1 * diff3);
}

const partTwo = () => {
    const file = fs.readFileSync('Day10/input.js', 'utf-8')
    const inputLines = file.split('\n').map(Number)
    .sort((a, b) => a - b);
    const input = [0, ...inputLines, inputLines[inputLines.length - 1] + 3];
    input.sort((a, b) => a - b);

    const counter = {0: 1}
    for(let i = 0; i < input.length; i++) {
      let j = i + 1;
      while(input[j] <= input[i] + 3) {
        counter[j] = (counter[j] || 0) + counter[i];
        j++;
      }
    }
    
    console.log("PART TWO: The total amount of different paths that can be taken is", counter[input.length - 1]);
}

const calculatePaths = (input) => {
    const stepCounter = {0: 1}
    for(let i = 0; i < input.length; i++) {
      let j = i + 1;
      while(input[j] <= input[i] + 3) {
        stepCounter[j] = (stepCounter[j] || 0) + stepCounter[i];
        j++;
      }
    }
    return stepCounter[input.length - 1];
  }

// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY TEN ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();