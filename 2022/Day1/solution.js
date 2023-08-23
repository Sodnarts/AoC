const input = require("./input");

const partOne = () => {
    const inp = input()

    let highestCalories = 0;

    let elfLists = inp.split("\n\n");
    elfLists.forEach((elfEntry) => {
        let elf = elfEntry.split("\n").map((entry) => parseInt(entry, 10)).reduce((a, b) => a + b)
        
        elf > highestCalories && (highestCalories = elf);
    })

    console.log("PART ONE: The elf carrying the most calories, is carrying ", highestCalories, " calories")
}

const partTwo = () => {
    const inp = input()

   
    let highestCalories = [0, 0 , 0];

    let elfLists = inp.split("\n\n");
    elfLists.forEach((elfEntry) => {
        let elf = elfEntry.split("\n").map((entry) => parseInt(entry, 10)).reduce((a, b) => a + b)
        
        if (elf > highestCalories[0]) {
            highestCalories[2] = highestCalories[1];
            highestCalories[1] = highestCalories[0];
            highestCalories[0] = elf;
        } else if (elf > highestCalories[1]) {
            highestCalories[2] = highestCalories[1];
            highestCalories[1] = elf;
        } else if (elf > highestCalories[2]) {
            highestCalories[2] = elf;
        }
    })

    console.log("PART TWO: The three elves carrying the most calories, are carrying ", highestCalories.reduce((a, b) => a + b), " calories in total")
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