const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day5/input.txt', 'utf-8')
    const arr = file.split('\n\n');
    
    const stacks = arr[0].split("\n");
    const tmpInstructions = arr[1].split("\n")
    const columns = [];
    const instructions = [];

    stacks.forEach((s, i) => {
        let chars = s.split("");

        if (i == stacks.length - 1) return;

        for (let i = 0; i < chars.length; i++) {
            if (i % 4 == 1 && chars[i] != " ") {
                if (!columns[Math.floor(i / 4)]) columns[Math.floor(i / 4)] = []
                columns[Math.floor(i / 4)].push(chars[i]);
            }
        }
    })

    tmpInstructions.forEach(t => {
        let p1 = 5, p2 = 12, p3 = 17;

        let num = t[p1]
        if (parseInt(t[p1 + 1], 10) >= 0) {
            num = t[p1] + t[p1 + 1]
            p2++;
            p3++;
        }

        let from = t[p2]
        if (parseInt(t[p2 + 1], 10) >= 0) {
            from = t[p2] + t[p2 + 1]
            p3++;
        }

        let to = t[p3]
        if (parseInt(t[p3 + 1], 10) >= 0) {
            to = t[p3] + t[p3 + 1]
        }

        instructions.push(num + "-" + from + "-" + to)
    })


    columns.forEach(c => {
        c.reverse();
    })

    instructions.forEach((instruction) => {
        let tmpI = instruction.split("-")
        for (let i = 0; i < parseInt(tmpI[0], 10); i++) {
            columns[parseInt(tmpI[2], 10) - 1].push(columns[parseInt(tmpI[1], 10) - 1].pop())
        }
    })

    let code = ""
    columns.forEach(column => {
        column.forEach((c, i) => {
            if (i == column.length - 1) code += c
        })
    })

    console.log("PART ONE: The top boxes generate the following code", code)
}

const partTwo = () => {
    const file = fs.readFileSync('Day5/input.txt', 'utf-8')
    const arr = file.split('\n\n');
    
    const stacks = arr[0].split("\n");
    const tmpInstructions = arr[1].split("\n")
    const columns = [];
    const instructions = [];

    stacks.forEach((s, i) => {
        let chars = s.split("");

        if (i == stacks.length - 1) return;

        for (let i = 0; i < chars.length; i++) {
            if (i % 4 == 1 && chars[i] != " ") {
                if (!columns[Math.floor(i / 4)]) columns[Math.floor(i / 4)] = []
                columns[Math.floor(i / 4)].push(chars[i]);
            }
        }
    })

    tmpInstructions.forEach(t => {
        let p1 = 5, p2 = 12, p3 = 17;

        let num = t[p1]
        if (parseInt(t[p1 + 1], 10) >= 0) {
            num = t[p1] + t[p1 + 1]
            p2++;
            p3++;
        }

        let from = t[p2]
        if (parseInt(t[p2 + 1], 10) >= 0) {
            from = t[p2] + t[p2 + 1]
            p3++;
        }

        let to = t[p3]
        if (parseInt(t[p3 + 1], 10) >= 0) {
            to = t[p3] + t[p3 + 1]
        }

        instructions.push(num + "-" + from + "-" + to)
    })

    columns.forEach(c => {
        c.reverse();
    })

    instructions.forEach((instruction) => {
        let tmpI = instruction.split("-")
        let tmpCols = []
        for (let i = 0; i < parseInt(tmpI[0], 10); i++) {
            tmpCols.push(columns[parseInt(tmpI[1], 10) - 1].pop())
        }
        columns[parseInt(tmpI[2], 10) - 1] = [...columns[parseInt(tmpI[2], 10) - 1], ...tmpCols.reverse()]
    })

    let code = ""
    columns.forEach(column => {
        column.forEach((c, i) => {
            if (i == column.length - 1) code += c
        })
    })

    console.log("PART ONE: The top boxes generate the following code", code)
}

// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY FIVE ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();