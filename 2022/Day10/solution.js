const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day10/input.txt', 'utf-8')
    const arr = file.split('\n');

    let corruptedIcons = []
    arr.forEach(a => {
        corruptedIcons.push(check(a.split(""))[0]);
    })

    let score = 0;
    corruptedIcons.forEach(c => {
        switch(c) {
            case ')': 
                score += 3;
                return;
            case ']':
                score += 57;
                return;
            case '}':
                score += 1197;
                return;
            case '>':
                score += 25137;
                return;
        }
    })

    console.log("PART ONE: The total syntax checking score is ", score)
}

const partTwo = () => {
    const file = fs.readFileSync('Day10/input.txt', 'utf-8')
    const arr = file.split('\n');

    let scores = []
    arr.forEach(a => {
        scores.push(check(a.split(""))[1]);
    })

    filteredScores = scores.filter(s => s != -1)
    
    filteredScores =  filteredScores.sort((a, b) => a - b);
    let winningScore = filteredScores[parseInt(filteredScores.length / 2, 10)]

    console.log("PART TWO: The winning score is ", winningScore)
}

const check = (list) => {
    let isCorrupted = false;
    let corrupedIcon = ''
    let inputs = []
    let outputs = []
    list.forEach(l => {
        if (isCorrupted) { return }

        if (l == "(" || l == "[" || l == "{" || l == "<") {
            inputs.push(l);
        } else {
            if (l == ')' && inputs[inputs.length - 1] == '(') {
                inputs.pop();
            } else if (l == ']' && inputs[inputs.length - 1] == '[') {
                inputs.pop();
            } else if (l == '}' && inputs[inputs.length - 1] == '{') {
                inputs.pop();
            } else if (l == '>' && inputs[inputs.length - 1] == '<') {
                inputs.pop();
            } else {
                isCorrupted = true;
                corrupedIcon = l
            }
        }
        
    })

    if (!isCorrupted) {
        return [corrupedIcon, findOutputs(inputs)]
    }
    return [corrupedIcon, -1];
}

const findOutputs = (inputs) => {
    const outputs = inputs.map(i => {
        if (i == '(') return ')';
        else if (i == '[') return ']';
        else if (i == '{') return '}';
        else if (i == '<') return '>';
    })

    let score = 0;
    const string = outputs.reverse().join(",").split(',').filter(o => o != '')
    string.forEach(s => {
        score *= 5;
        if (s == ')') score +=1;
        else if (s == ']') score += 2;
        else if (s == '}') score += 3;
        else if (s == '>') score += 4;
    })
    return score;
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