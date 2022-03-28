const fs = require('fs');


// Part Two Answer
let answer = 0;

const partOne = () => {
    const file = fs.readFileSync('Day7/input.js', 'utf-8')
    const tmp = file.split('\n');
    const arr = tmp.slice(1, tmp.length- 1);
    const arrayOfContains = [];
    let hasMore = true;

    for (let i = 0; i < arr.length; i++) {
        const tmpArr = arr[i].split(' contain ');

        if (tmpArr[1].includes('shiny gold')) {
            arrayOfContains.push(tmpArr[0].substring(0, tmpArr[0].length - 1));
        }
    }

    while (hasMore) {
        let hasFound = false;

        for (let i = 0; i < arr.length; i++) {
            const tmpArr = arr[i].split(' contain ');

            for (let j = 0; j < arrayOfContains.length; j++) {
                if (!(arrayOfContains.includes(tmpArr[0].substring(0, tmpArr[0].length - 1))) && tmpArr[1].includes(arrayOfContains[j])) {
                    arrayOfContains.push(tmpArr[0].substring(0, tmpArr[0].length - 1));
                    hasFound = true;
                }
            }
        }
        if (!hasFound) hasMore = false;
    }
    console.log("PART ONE: The amount of bags that can hold a Shiny Gold bag is", arrayOfContains.length)
}

const partTwo = () => {
    const file = fs.readFileSync('Day7/input.js', 'utf-8')
    const arr = file.split('\n');
    const arrayOfContains = [];
    
    for (let i = 0; i < arr.length; i++) {
        const tmpArr = arr[i].split(' contain ');

        if (tmpArr[0].includes('shiny gold')) {
            const split = tmpArr[1].split(", ");
            for (let j = 0; j < split.length; j++) {
                let word = split[j].substring(2, split[j].length - 1);
                if (split[j].includes(".")) word = split[j].substring(2, split[j].length - 2);
                arrayOfContains.push([split[j].substring(0, 1), word]);
            }
        }
    }

    for (let i = 0; i < arrayOfContains.length; i++) {
        recursive(arrayOfContains[i], i, arr)  
    }
    
    for (let i = 0; i < arrayOfContains.length; i++) {
        count(arrayOfContains[i], 1)  
    }
    console.log("PART TWO: There are a total of",answer,"bags inside a Shiny Gold bag.")
}

const recursive = (array, i, arr) => {
    for (let j = 0; j < arr.length; j++) {
        const tmpArr = arr[j].split(' contain ');

        if (array.includes(tmpArr[0].substring(0, tmpArr[0].length - 1))) {
            if (!(tmpArr[1].substring(0, 1) == "n")) {
                const split = tmpArr[1].split(", ");
                for (let k = 0; k < split.length; k++) {
                    let word = split[k].substring(2, split[k].length);
                    if (split[k].includes("bags")) word = split[k].substring(2, split[k].length - 1);
                    if (split[k].includes("bags.")) word = split[k].substring(2, split[k].length - 2);
                    if (split[k].includes("bag.")) word = split[k].substring(2, split[k].length - 1);
                    array.push([split[k].substring(0, 1), word]);
                }
                for (let b = 2; b < array.length; b++) {
                    recursive(array[b], i, arr)
                }
            }
        }
    }
}

const count = (array, num) => {
    if (array[2] != undefined) {
        for (let b = 2; b < array.length; b++) {
            count(array[b], num * array[0])
        }
        answer += num * array[0]
    } else {
        answer +=  array[0] * num
    }
}

// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY SEVEN ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();