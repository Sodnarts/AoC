const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day18/input.txt', 'utf-8')
    const arr = file.split('\n').filter(x => x);
    let sum = 0;
    arr.forEach(line => {
        while(/\(/.test(line)) {
            line = line.replace(/\(([^()]+)\)/g, (match, group) => {
                let tokens = group.split(' ');
                while(tokens.length > 1) {
                    tokens = [eval(tokens.slice(0, 3).join(''))].concat(tokens.slice(3))
                }
                return tokens[0];
            })
        }
        let tokens = line.split(' ');
        while(tokens.length > 1) {
            tokens = [eval(tokens.slice(0, 3).join(''))].concat(tokens.slice(3))
        }
         
         sum += tokens[0];
    });
    
    
    console.log("PART ONE: The total sum of all maths questions is", sum);
}

const partTwo = () => {
    const file = fs.readFileSync('Day18/input.txt', 'utf-8')
    const arr = file.split('\n').filter(x => x);
    let sum = 0;
    arr.forEach(line => {
        while(/\(/.test(line)) {
            line = line.replace(/\(([^()]+)\)/g, (match, group) => {
                while(/\+/.test(group)) {
                    group = group.replace(/(\d+) \+ (\d+)/g, (match, firstNumber, secondNumber) => {
                        return parseInt(firstNumber) + parseInt(secondNumber);
                    })
                }
                return eval(group);
            })
        }
        while(/\+/.test(line)) {
            line = line.replace(/(\d+) \+ (\d+)/g, (match, firstNumber, secondNumber) => {
                return parseInt(firstNumber) + parseInt(secondNumber);
            })
        }

        sum += eval(line);
    });
    
    
    console.log("PART TWO: The total sum of all maths questions is", sum);
}

// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY EIGHTEEN ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();