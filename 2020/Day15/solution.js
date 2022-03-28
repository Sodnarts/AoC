const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day15/input.js', 'utf-8')
    const startNums = file.split(',');
    const usedNums = [];
    let currentNum = parseInt(startNums[0], 10);

    for (let i = 0; i < startNums.length; i++) {
        usedNums.push(parseInt(startNums[i], 10));
    }

    currentNum = 0

    for (let i = 0; i < 2020 - startNums.length - 1; i++) {
        if (usedNums.includes(currentNum)) {
            let tmpNum = usedNums.lastIndexOf(currentNum) + 1;
            usedNums.push(currentNum);
            
            currentNum = usedNums.length - tmpNum;
        }
        else {
            usedNums.push(currentNum);
            currentNum = 0;
        }
    }
    console.log(currentNum)
}


const partTwo = () => {
    const file = fs.readFileSync('Day15/input.js', 'utf-8')
    const numbers = file.split(',').map(Number);

    const seen = new Map(
        numbers.flatMap((number, index) =>
          index < numbers.length - 1
            ? [[number, index]]
            : []
        )
    );

    let last = numbers[numbers.length - 1];
  
    for (let i = numbers.length; i < 30000000; ++i) {
      const term = seen.has(last) ? i - seen.get(last) - 1 : 0;
      seen.set(last, i - 1);
      last = term;
    }
    console.log(last)
}


// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY FIFTEEN ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();