const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day6/input.txt', 'utf-8')
    let arr = file.split(',').map(n => parseInt(n, 10));
    const days = 256;
    let lanternfish = solution(days, arr)
    console.log("PART ONE: After", days, "there is a total of", lanternfish, "lanterfish.")
}

const partTwo = () => {
    const file = fs.readFileSync('Day6/input.txt', 'utf-8')
    const arr = file.split('\n');
}

const solution = (days, input) => {
    let lanternfish = []

    for (let i = 0; i < 11; i++) {
        lanternfish[i] = 0;
    }

    input.forEach(i => {
        lanternfish[i] += 1;
    })

    for (let i = 0; i < days; i++) {
        let new_fish = {}
        new_fish[0] = lanternfish[1]
        new_fish[1] = lanternfish[2]
        new_fish[2] = lanternfish[3]
        new_fish[3] = lanternfish[4]
        new_fish[4] = lanternfish[5]
        new_fish[5] = lanternfish[6]
        new_fish[6] = lanternfish[7]
        new_fish[7] = lanternfish[8]
        new_fish[6] += lanternfish[0]
        new_fish[8] = lanternfish[0]
        lantern = new_fish
    }

    let totalSum = 0;
    for (let i = 0; i < 11; i++) {
        totalSum += lanternfish[i];
    }
    return totalSum;
    /* for i in range(11):
        fish[str(i)] = 0
    for i in values:
        fish[str(i)] += 1

    for i in range(days):
        new_fish = {}
        new_fish['0'] = fish['1']
        new_fish['1'] = fish['2']
        new_fish['2'] = fish['3']
        new_fish['3'] = fish['4']
        new_fish['4'] = fish['5']
        new_fish['5'] = fish['6']
        new_fish['6'] = fish['7']
        new_fish['7'] = fish['8']
        new_fish['6'] += fish['0']
        new_fish['8'] = fish['0']
        fish = new_fish

    return sum(fish.values())*/
    return lanternfish
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