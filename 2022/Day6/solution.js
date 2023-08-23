const fs = require('fs');

const partOne = () => {
    const file = fs.readFileSync('Day6/input.txt', 'utf-8')
    let arr = file.split("")

    let str = "";
    let firstPacketPosition = null;

    arr.forEach((a, i) =>{
            if (str.indexOf(a) > -1) {
                str = str.substring(str.indexOf(a) + 1,str.length)
                str += a;
            } else {
                str += a;
            }
        if (str.length == 4 && firstPacketPosition == null) {
            firstPacketPosition = i + 1
        }
    })
    console.log("PART ONE: The first start-of-packet marker is detected after ", firstPacketPosition, "characters")
}

const partTwo = () => {
    const file = fs.readFileSync('Day6/input.txt', 'utf-8')
    const arr = file.split("");

    let str = "";
    let firstPacketPosition = null;

    arr.forEach((a, i) =>{
            if (str.indexOf(a) > -1) {
                str = str.substring(str.indexOf(a) + 1,str.length)
                str += a;
            } else {
                str += a;
            }
        if (str.length == 14 && firstPacketPosition == null) {
            firstPacketPosition = i + 1
        }
    })

    console.log("PART TWO: The first start-of-message marker is detected after ", firstPacketPosition, " characters")
}

// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY SIX ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();