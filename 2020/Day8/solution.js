const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day8/input.js', 'utf-8')
    const arr = file.split('\n');
    const hasVisisted = [];
    let acc = 0;
    
   for (let i = 0; i < arr.length; i++) {
       if (hasVisisted.includes(i)) {
        console.log("PART ONE: When encountering an infinite loop, the value of acc is", acc);
        return;
        }        
        hasVisisted.push(i);
        let tmpArr = arr[i].split(" ");
        switch(tmpArr[0]) {
            case 'nop':
                break;
            case 'jmp':
                i += parseInt(tmpArr[1], 10) - 1;
                break;
            case 'acc':
                acc += parseInt(tmpArr[1], 10);
                break;
        }
    }
}

const partTwo = () => {
    const file = fs.readFileSync('Day8/input.js', 'utf-8')
    const arr = file.split('\n');
    
    for (let i = 0; i < arr.length; i++) {
        let acc = 0;
        let P = [...arr];
        if (P[i].split(' ')[0] == 'nop') {
           P[i] = 'jmp ' + P[i].split(' ')[1];
        }
        if (P[i].split(' ')[0] == 'jmp') {
            P[i] = 'nop ' + P[i].split(' ')[1];
        }
        let t = 0;
        let ip = 0;
       
        while (0 <= ip && ip <= P.length && t < 1000) {
            t++;
            words = P[ip].split(" ");
            switch(words[0]) {
            case 'nop':
                ip += 1;
                break;
            case 'jmp':
                ip += parseInt(words[1], 10);
                break;
            case 'acc':
                acc += parseInt(words[1], 10);
                ip += 1;
                break;
            }
            if (ip == P.length) {
                console.log("PART TWO: After fixing the infinite loop, the acc is", acc, "at the end of the program.");
                t = 2000;
            }
       }
   }
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