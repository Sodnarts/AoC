const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day23/input.js', 'utf-8')
    let cups = file.split('').map(a => parseInt(a));
    let currentCup = -1;
    let destination = -1;
    let pickedUpCups = [];
    
    for (let i = 0; i < 100; i++) {
        currentCup = cups[0];
        let hasFoundValidDestination = false;
        let decrement = currentCup == 1 ? -8 : 1;
        pickedUpCups = [cups[1], cups[2], cups[3]];
   
        // Selects destination
        while (!hasFoundValidDestination) {
            for (let i = 0; i < cups.length; i++) {
                if (cups[i] == currentCup - decrement) {
                    if (pickedUpCups.includes(cups[i])) {
                        if (currentCup - decrement <= 1) {
                            decrement = currentCup - 9;
                        } else decrement++;
                    } else {
                        destination = cups[i];
                        hasFoundValidDestination = true;
                    }
                }
            }
        }
        cups = [...rearrangeCups(cups, pickedUpCups, destination, currentCup)];
    }

    const frontArr = [];
    const backArr = [];
    let hasFound1 = false;
    for (let i = 0; i < cups.length; i++) {
        if (cups[i] == 1) {
            hasFound1 = true;
        } else {
            if (hasFound1) {
                frontArr.push(cups[i]);
            } else {
                backArr.push(cups[i]);
            }
        }
    }
    cups = [...frontArr, ...backArr]
    const answer = cups.join("");
    console.log("PART ONE: The order of the cups is", parseInt(answer));
}

const partTwo = () => {
    const file = fs.readFileSync('Day23/input.js', 'utf-8')
    const arr = file.split('\n');
    let cups = file.split('').map(a => parseInt(a));
    for (let i = 10; i < 1000000; i++) {
        cups.push(i);
    }
    let currentCup = -1;
    let destination = -1;
    let pickedUpCups = [];
    for (let i = 0; i < 100; i++) {
        currentCup = cups[0];
        pickedUpCups = [cups[1], cups[2], cups[3]];

        // Selects destination
        destination = getDestination(currentCup, cups.length, pickedUpCups);
        cups = [...rearrangeCups(cups, pickedUpCups, destination, currentCup)];
    }

    const answer = [];
    for (let i = 0; i < cups.length; i++) {
        if (cups[i] == 1) {
            answer.push(cups[i + 1]);
            answer.push(cups[i + 2]);
        }
    }

    console.log(answer[0], answer[1]);
    console.log("PART ONE: The order of the cups is", answer[0] * answer[1]);
}

const rearrangeCups = (cups, pickedCups, destination, currentCup) => {
    let rearrangedCups = [];
    for (let i = 0; i < cups.length; i++) {
        if (cups[i] == destination) {
            rearrangedCups.push(cups[i]);
            for (let j = 0; j < pickedCups.length; j++) {
                rearrangedCups.push(pickedCups[j]);
            }
        } else if (cups[i] != currentCup && !pickedCups.includes(cups[i])) {
            rearrangedCups.push(cups[i]);
        }
    }
    rearrangedCups.push(currentCup);
    return rearrangedCups;
}

const getDestination = (currentCup, maxLength, pickedCups) => {
    let destination = currentCup;
    while (true) {
      destination = destination - 1;
      if (destination < 1) destination = maxLength;
      if (pickedCups.includes(destination)) continue;
      break;
    }
    return destination;
};
// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY TWENTYTHREE ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();