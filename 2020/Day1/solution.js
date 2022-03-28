const input = require("./input");

const partOne = () => {
    const inp = input()
    for (let i = 0; i < inp.length; i++) {
        for (let j = 0; j < inp.length; j++) {
            if (inp[i] + inp[j] == 2020) {
                console.log("PART ONE: Positions: ", i, j, " contains the numbers: ", inp[i], inp[j], " which adds to 2020, and multiplicatively gives: ", inp[i] * inp[j])
                return;
            }
        }
    }
}

const partTwo = () => {
    const inp = input()

    for (let i = 0; i < inp.length; i++) {
        for (let j = 0; j < inp.length; j++) {
            for (let k = 0; k < inp.length; k++) {
                if (inp[i] + inp[j] + inp[k] == 2020) {
                    console.log("PART TWO: Positions: ", i, j, k, " contains the numbers: ", inp[i], inp[j], inp[k], " which adds to 2020, and multiplicatively gives: ", inp[i] * inp[j] * inp[k])
                    return;
                }
            }
        }
    }
}

// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY ONE ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();