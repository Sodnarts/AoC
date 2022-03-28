const fs = require('fs');

const digits = [
    ["a", "b", "c","e","f","g"],    // 6
    ["c", "f"],                     // 2
    ["a", "c", "d", "e", "g"],      // 5
    [ "a", "c", "d", "f", "g"],     // 5
    ["b", ",c", "d", "f"],          // 4
    ["a", "b", "d", "f", "g"],      // 5
    ["a", "b", "d", "e", "f", "g"], // 6
    ["a", "c", "f"],                // 3
    ["a","b","c","d","e","f","g"],  // 7
    ["a","b","c","d","f","g"],      // 6
]

const partOne = () => {
    const file = fs.readFileSync('Day8/input.txt', 'utf-8')
    const arr = file.split('\n').map(l => {
        let tmp = l.split(" | ");

        let wires = tmp[0].trim(' ').split(" ").map(w => w.split("").sort().join(""));
        let segments = tmp[1].trim(' ').split(" ").map(s => s.split("").sort().join(""));
        
        return [wires, segments]
    });

    let uniqueSegmentsFound = 0;
    let outputSum = 0;

    arr.forEach(item => {
        let displayMap = [];

        // Part one, find the easy numbers
        item[0].forEach(i => {
            switch (i.length) {
                case 2: displayMap[1] = i; return;
                case 3: displayMap[7] = i; return;
                case 4: displayMap[4] = i; return;
                case 7: displayMap[8] = i; return;
            }
        });

        item[1].forEach(i => {
            if (displayMap.includes(i)) uniqueSegmentsFound++; 
        });

        // Part two
        let fiveSegments = item[0].filter(i => i.length == 5)
        let sixSegments = item[0].filter(i => i.length == 6)

        // Find 9 // 3 0 6 diff 5 not 2
        sixSegments.forEach(s => {
            if (
                s.includes(displayMap[4][0]) &&
                s.includes(displayMap[4][1]) &&
                s.includes(displayMap[4][2]) &&
                s.includes(displayMap[4][3]) &&
                s.includes(displayMap[7][0]) &&
                s.includes(displayMap[7][1]) && 
                s.includes(displayMap[7][2])
            ) {
                displayMap[9] = s;
            }
        });
        sixSegments = sixSegments.filter(s => s != displayMap[9])
       
        // Find 0
        sixSegments.forEach(s => {
            if (
                s.includes(displayMap[7][0]) &&
                s.includes(displayMap[7][1]) && 
                s.includes(displayMap[7][2])
            ) {
                displayMap[0] = s;
            }
        });
        sixSegments = sixSegments.filter(s => s != displayMap[0])

        // 6 is the only 6-segment left
        displayMap[6] = sixSegments[0];

        fiveSegments.forEach(f => {
            if (
                f.includes(displayMap[7][0]) &&
                f.includes(displayMap[7][1]) && 
                f.includes(displayMap[7][2])
            ) {
                displayMap[3] = f;
            }
        });
        fiveSegments = fiveSegments.filter(f => f != displayMap[3])

        let diff = ""
        let secondDiff = ""

        displayMap[3].split("").forEach(t => {
            if (!displayMap[0].includes(t))
                diff+= t
        })
        displayMap[0].split("").forEach(t => {
            if (!displayMap[3].includes(t))
                diff+= t
        })

        diff.split("").forEach(t => {
            if (!displayMap[6].includes(t))
                secondDiff += t
        })
        displayMap[6].split("").forEach(t => {
            if (!diff.includes(t))
                secondDiff += t
        })

        fiveSegments.forEach(f => {
            let contains = true;
            secondDiff.split("").forEach(s => {
                if (!f.includes(s)) contains = false;
            })
            if (contains) displayMap[5] = f;
        });
        fiveSegments = fiveSegments.filter(f => f != displayMap[5])

        displayMap[2] = fiveSegments[0]

        let value = ""
        item[1].forEach(a => {
            value += displayMap.findIndex(d => d == a)
        })

        outputSum += parseInt(value, 10)
    })
    console.log("PART ONE: Total instances of 1, 4, 7 or 8:", uniqueSegmentsFound)
    console.log("PART ONE: Total value is", outputSum)
}

const partTwo = () => {
    const file = fs.readFileSync('Day8/input.txt', 'utf-8')
    const arr = file.split('\n');
}


// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY EIGHT ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();