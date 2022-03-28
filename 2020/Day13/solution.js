const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day13/input.js', 'utf-8')
    const arr = file.split('\n');
    const arrival = arr[0];
    let ids = arr[1].split(",");
    const tmpArr = [];
    let minTime = 1000;
    let correctId = 0;

    for (let i = 0; i < ids.length; i++) {
        if (ids[i] !== "x") {
            tmpArr.push(ids[i]);
        }
    }
    ids = [...tmpArr];

    for (let i = 0; i < ids.length; i++) {
        let bool = true;
        let j = 1;
        while (bool) {
            if (ids[i] * j >= arrival) {
                bool = false;
                if (minTime > (ids[i] * j) - arrival) {
                    minTime = (ids[i] * j) - arrival;
                    correctId = ids[i]
                }
            }
            j++;
        }
    }
    console.log("PART ONE: The buss with id", parseInt(correctId, 10), "will be arriving", minTime, "minutes after you. Multiplicatively this gives", minTime * correctId);
}

const partTwo = () => {
    const file = fs.readFileSync('Day13/input.js', 'utf-8')
    const arr = file.split('\n');
    let buses = arr[1]
    .split(',')
    .map((id, req) => {
      return id === 'x' ? false : { id: parseInt(id), req }
    })
    .filter(Boolean)

    let time = 0
    let multiplier = buses[0].id
    let unsatisfied = 1
    let next

    while (unsatisfied < buses.length) {
        time += multiplier
        next = buses[unsatisfied]

        if ((time + next.req) % next.id === 0) {
            multiplier *= next.id
            unsatisfied++
        }
    }
  console.log("PART TWO: The earliest timestamp is", time);
}

// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY THIRTEEN ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();