const fs = require('fs');

const partOne = () => {
    const file = fs.readFileSync('Day9/input.txt', 'utf-8')
    const arr = file.split('\n')

    let visitedPos = ["1000010000"]
    let H = [10000, 10000]
    let T = [10000, 10000]

    arr.forEach(a => {
        let commands = a.split(" ");

        switch (commands[0]) {
            case "U":
                for (let i = 0; i < parseInt(commands[1], 10); i++) {
                    H[1]++;
                    
                    if (H[1] - T[1] > 1) {
                        T[0] = H[0]
                        T[1] = H[1] -1 
                        
                        let foundPos = visitedPos.filter(v => v === T.join(""))
                        foundPos.length < 1 && visitedPos.push(T.join(""));
                    }
                }
                break;
            case "R":
                for (let i = 0; i < parseInt(commands[1], 10); i++) {
                    H[0]++;
                    
                    if (H[0] - T[0] > 1) {
                        T[0] = H[0] -1
                        T[1] = H[1] 
                        
                        let foundPos = visitedPos.filter(v => v === T.join(""))
                        foundPos.length < 1 && visitedPos.push(T.join(""));
                    }
                }
                break;
            case "D":
                for (let i = 0; i < parseInt(commands[1], 10); i++) {
                    H[1]--;
                    
                    if (T[1] - H[1] > 1) {
                        T[0] = H[0]
                        T[1] = H[1] +1 
                        
                        let foundPos = visitedPos.filter(v => v === T.join(""))
                        foundPos.length < 1 && visitedPos.push(T.join(""));
                    }
                }
                break;
            case "L":
                for (let i = 0; i < parseInt(commands[1], 10); i++) {
                    H[0]--;
                    
                    if (T[0] - H[0] > 1) {
                        T[0] = H[0] +1
                        T[1] = H[1] 
                        
                        let foundPos = visitedPos.filter(v => v === T.join(""))
                        foundPos.length < 1 && visitedPos.push(T.join(""));
                    }
                }
                break;
        }
    })
    console.log("PART ONE: The total amount of visited positions for the tail is ", visitedPos.length)
}

const partTwo = () => {
    const file = fs.readFileSync('Day9/input.txt', 'utf-8')
    const arr = file.split('\n');
     
    const num = arr.filter(l=>l!="").map(l=>l.split(" ")).reduce((a,b)=>Array(Number(b[1])).fill(0).reduce((c,i)=>[c[0].slice(1).reduce((d,n)=>d.slice(-1).map(p=>d.concat([[[n[0]-p[0],n[1]-p[1]].map(t=>Math.abs(t)>1?Math.sign(t):0)].map(v=>v.every(f=>f==0)?n:[p[0]+v[0],p[1]+v[1]])[0]]))[0],[[c[0][0]].map(h=>b[0]=='D'?[h[0],h[1]-1]:b[0]=='U'?[h[0],h[1]+1]:b[0]=='L'?[h[0]-1,h[1]]:[h[0]+1,h[1]])[0]])].map(s=>[s,c[1].filter(e=>e.every((v,i)=>v==s.slice(-1)[0][i])).length==0?c[1].concat(s.slice(-1)):c[1]])[0],a),[Array(10).fill([0,0]),[]])[1].length
    console.log("PART TWO: The total amount of visited positions for the ninth tail is ", num)
}

const partTwoOriginal = () => {
    const file = fs.readFileSync('Day9/input.txt', 'utf-8')
    const arr = file.split('\n');

    let visitedPos = ["1000010000"]
        H = [10000, 10000];
        T1 = [10000, 10000];
        T2 = [10000, 10000];
        T3 = [10000, 10000];
        T4 = [10000, 10000];
        T5 = [10000, 10000];
        T6 = [10000, 10000];
        T7 = [10000, 10000];
        T8 = [10000, 10000];
        T9 = [10000, 10000];

    arr.forEach(a => {
        let commands = a.split(" ");
        for (let i = 0; i < parseInt(commands[1], 10); i++) {
            switch (commands[0]) {
                case "U":
                    H[1]++;
                    break;
                case "R":
                    H[0]++;
                    break;
                case "D":
                    H[1]--;
                    break;    
                case "L":
                    H[0]--; 
                    break;
            }

            if (H[0] - T1[0] > 1) {
                T1[0] = H[0] - 1
                T1[1] = H[1]
            } else if (H[1] - T1[1] > 1) {
                T1[0] = H[0]
                T1[1] = H[1] - 1
            } else if (T1[0] - H[0] > 1) {
                T1[0] = H[0] + 1
                T1[1] = H[1]
            } else if (T1[1] - H[1] > 1) {
                T1[0] = H[0]
                T1[1] = H[1] + 1
            }

            if (T1[0] - T2[0] > 1) {
                T2[0] = T1[0] - 1
                T2[1] = T1[1]
            } else if (T1[1] - T2[1] > 1) {
                T2[0] = T1[0]
                T2[1] = T1[1] - 1
            } else if (T2[0] - T1[0] > 1) {
                T2[0] = T1[0] + 1
                T2[1] = T1[1]
            } else if (T2[1] - T1[1] > 1) {
                T2[0] = T1[0]
                T2[1] = T1[1] + 1
            }

            if (T2[0] - T3[0] > 1) {
                T3[0] = T2[0] - 1
                T3[1] = T2[1]
            } else if (T2[1] - T3[1] > 1) {
                T3[0] = T2[0]
                T3[1] = T2[1] - 1
            } else if (T3[0] - T2[0] > 1) {
                T3[0] = T2[0] + 1
                T3[1] = T2[1]
            } else if (T3[1] - T2[1] > 1) {
                T3[0] = T2[0]
                T3[1] = T2[1] + 1
            }

            if (T3[0] - T4[0] > 1) {
                T4[0] = T3[0] - 1
                T4[1] = T3[1]
            } else if (T3[1] - T4[1] > 1) {
                T4[0] = T3[0]
                T4[1] = T3[1] - 1
            } else if (T4[0] - T3[0] > 1) {
                T4[0] = T3[0] + 1
                T4[1] = T3[1]
            } else if (T4[1] - T3[1] > 1) {
                T4[0] = T3[0]
                T4[1] = T3[1] + 1
            }

            if (T4[0] - T5[0] > 1) {
                T5[0] = T4[0] - 1
                T5[1] = T4[1]
            } else if (T4[1] - T5[1] > 1) {
                T5[0] = T4[0]
                T5[1] = T4[1] - 1
            } else if (T5[0] - T4[0] > 1) {
                T5[0] = T4[0] + 1
                T5[1] = T4[1]
            } else if (T5[1] - T4[1] > 1) {
                T5[0] = T4[0]
                T5[1] = T4[1] + 1
            }

            if (T5[0] - T6[0] > 1) {
                T6[0] = T5[0] - 1
                T6[1] = T5[1]
            } else if (T5[1] - T6[1] > 1) {
                T6[0] = T5[0]
                T6[1] = T5[1] - 1
            } else if (T6[0] - T5[0] > 1) {
                T6[0] = T5[0] + 1
                T6[1] = T5[1]
            } else if (T6[1] - T5[1] > 1) {
                T6[0] = T5[0]
                T6[1] = T5[1] + 1
            }

            if (T6[0] - T7[0] > 1) {
                T7[0] = T6[0] - 1
                T7[1] = T6[1]
            } else if (T6[1] - T7[1] > 1) {
                T7[0] = T6[0]
                T7[1] = T6[1] - 1
            } else if (T7[0] - T6[0] > 1) {
                T7[0] = T6[0] + 1
                T7[1] = T6[1]
            } else if (T7[1] - T6[1] > 1) {
                T7[0] = T6[0]
                T7[1] = T6[1] + 1
            }

            if (T7[0] - T8[0] > 1) {
                T8[0] = T7[0] - 1
                T8[1] = T7[1]
            } else if (T7[1] - T8[1] > 1) {
                T8[0] = T7[0]
                T8[1] = T7[1] - 1
            } else if (T8[0] - T7[0] > 1) {
                T8[0] = T7[0] + 1
                T8[1] = T7[1]
            } else if (T8[1] - T7[1] > 1) {
                T8[0] = T7[0]
                T8[1] = T7[1] + 1
            }

            if (T8[0] - T9[0] > 1) {
                T9[0] = T8[0] - 1
                T9[1] = T8[1]
            } else if (T8[1] - T9[1] > 1) {
                T9[0] = T8[0]
                T9[1] = T8[1] - 1
            } else if (T9[0] - T8[0] > 1) {
                T9[0] = T8[0] + 1
                T9[1] = T8[1]
            } else if (T9[1] - T8[1] > 1) {
                T9[0] = T8[0]
                T9[1] = T8[1] + 1
            }

            let foundPos = visitedPos.filter(v => v === T9.join(""))
            foundPos.length < 1 && visitedPos.push(T9.join(""));
        }
    })

    console.log("PART TWO: The total amount of visited positions for the ninth tail is ", visitedPos.length)
}

// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY NINE ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();