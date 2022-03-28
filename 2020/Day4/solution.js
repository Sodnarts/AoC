const fs = require('fs');

// Part One Answer
let valid = 0;

// Part Two Answer
let valid2 = 0;

const partOne = async() => {
    const file = fs.readFileSync('Day4/input.js', 'utf-8')
    const arr = file.split('\n\n');

    for (let i = 0; i < arr.length; i++) {
        let bool = true;
        if (!arr[i].includes('ecl') || !arr[i].includes('pid') || !arr[i].includes('eyr') || !arr[i].includes('hcl') || 
        !arr[i].includes('byr') || !arr[i].includes('iyr') || !arr[i].includes('hgt')) {
            bool = false;
        }

        if (bool) valid++;
    }

    console.log("PART ONE: Number of valid passports is", valid, ". This is given that \"cid\" is considered as an optional.");
}

const partTwo = () => {
    const file = fs.readFileSync('Day4/input.js', 'utf-8')
    const arr = file.split('\n\n');

    for (let i = 0; i < arr.length; i++) {
        let bool = true;
        
        if (!arr[i].includes('ecl') || !arr[i].includes('pid') || !arr[i].includes('eyr') || !arr[i].includes('hcl') || 
        !arr[i].includes('byr') || !arr[i].includes('iyr') || !arr[i].includes('hgt')) {
            bool = false;
        } else {
            let tmpArr = arr[i].split(/\s+/);

            for (let j = 0; j < tmpArr.length; j++) {
                const el = tmpArr[j].split(':');
                switch (el[0]) {
                    case 'byr':
                        if (el[1] < 1920 || el[1] > 2002 || el[1].length != 4) {
                            bool = false;
                        }
                        break;
                    case 'iyr':
                        if (el[1] < 2010 || el[1] > 2020 || el[1].length != 4) {
                            bool = false;
                        }
                        break;
                    case 'eyr':
                        if (el[1] < 2020 || el[1] > 2030 || el[1].length != 4) {
                            bool = false;
                        }
                        break;
                    case 'hgt':
                        if (!el[1].includes('cm') && !el[1].includes('in')) {
                            bool = false;
                        } else if (el[1].includes('cm')) {
                            const height = el[1].split("cm");
                            if (height[0] < 150 || height[0] > 193) {
                                bool = false;
                            }
                        } else if (el[1].includes('in')) {
                            const height = el[1].split("in");
                            if (height[0] < 59 || height[0] > 76) {
                                bool = false;
                            }
                        }
                        break;
                    case 'pid':
                        if (el[1].length != 9) bool = false;
                        break;
                    case 'ecl':
                        if ((el[1] != 'amb') && (el[1] != 'blu') && (el[1] != 'brn') && (el[1] != 'gry') 
                        && (el[1] != 'grn') && (el[1] != 'hzl') && (el[1] != 'oth')) {
                            bool = false;
                        }
                        break;
                    case 'hcl':
                        if (!el[1].match(/^#([0-9a-f]{6})$/i)) {
                            bool = false;
                        }
                        break;
                }
            }
        }
         if (bool) valid2++;
    }
    console.log("PART TWO: Number of valid passports is", valid2,". This is given when checking all rules.");
}


// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY FOUR ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();