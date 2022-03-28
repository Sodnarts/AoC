const fs = require('fs');


// Part One Answer

// Part Two Answer
Direction = {
1: 'NORTH',
2: "EAST",
3: "SOUTH",
4: "WEST"
}

const partOne = () => {
    const file = fs.readFileSync('Day12/input.js', 'utf-8')
    const arr = file.split('\n');
    let direction = Direction[2];
    let e = 0;
    let n = 0;
    let s = 0;
    let w = 0;
    let ns = 0;
    let ew = 0;

    for (let i = 0; i < arr.length; i++) {
        let nextCommand = arr[i].substring(0, 1);
        let nextValue = parseInt(arr[i].substring(1, arr[i].length), 10);
        switch(nextCommand) {
            case 'N':
                n += nextValue
                break;
            case 'S':
                s += nextValue
                break;
            case 'E':
                e += nextValue
                break;
            case 'W':
                w += nextValue
                break;
            case 'L':
                if (nextValue == 90) {
                    Direction[direction]
                }
                if (direction == Direction[1]) {
                    if (nextValue == 90) direction = Direction[4];
                    if (nextValue == 180) direction = Direction[3];
                    if (nextValue == 270) direction = Direction[2];
                } else if (direction == Direction[2]) {
                    if (nextValue == 90) direction = Direction[1];
                    if (nextValue == 180) direction = Direction[4];
                    if (nextValue == 270) direction = Direction[3];
                } else if (direction == Direction[3]) {
                    if (nextValue == 90) direction = Direction[2];
                    if (nextValue == 180) direction = Direction[1];
                    if (nextValue == 270) direction = Direction[4];
                } else if (direction == Direction[4]) {
                    if (nextValue == 90) direction = Direction[3];
                    if (nextValue == 180) direction = Direction[2];
                    if (nextValue == 270) direction = Direction[1];
                }
                break;
            case 'R':
                if (direction == Direction[1]) {
                    if (nextValue == 90) direction = Direction[2];
                    if (nextValue == 180) direction = Direction[3];
                    if (nextValue == 270) direction = Direction[4];
                } else if (direction == Direction[2]) {
                    if (nextValue == 90) direction = Direction[3];
                    if (nextValue == 180) direction = Direction[4];
                    if (nextValue == 270) direction = Direction[1];
                } else if (direction == Direction[3]) {
                    if (nextValue == 90) direction = Direction[4];
                    if (nextValue == 180) direction = Direction[1];
                    if (nextValue == 270) direction = Direction[2];
                } else if (direction == Direction[4]) {
                    if (nextValue == 90) direction = Direction[1];
                    if (nextValue == 180) direction = Direction[2];
                    if (nextValue == 270) direction = Direction[3];
                }
                break;
            case 'F':
                if (direction == Direction[1]) n += nextValue;
                if (direction == Direction[2]) e += nextValue;
                if (direction == Direction[3]) s += nextValue;
                if (direction == Direction[4]) w += nextValue;
                break;
        }
    }
    if (n > s) {
        ns = n - s;
    } else {
        ns = s - n;
    }

    if (e > w) {
        ew = e - w;
    } else {
        ew = w - e;
    }
    console.log("PART ONE: The ship's Manhatten distance is", ns + ew);
}
// Old Part Two code that did not work.
// const p3 = () => {
//     const file = fs.readFileSync('Day12/input.js', 'utf-8')
//     const arr = file.split('\n');
//     let direction = Direction[1];
//     let e = 10;
//     let n = 1;
//     let s = 0;
//     let w = 0;
//     let ae = 0;
//     let an = 0;
//     let as = 0;
//     let aw = 0;
//     let ns = 0;
//     let ew = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let nextCommand = arr[i].substring(0, 1);
//         let nextValue = parseInt(arr[i].substring(1, arr[i].length), 10);
//         switch(nextCommand) {
//             case 'N':
//                 n += nextValue
//                 break;
//             case 'S':
//                 s += nextValue
//                 break;
//             case 'E':
//                 e += nextValue
//                 break;
//             case 'W':
//                 w += nextValue
//                 break;
//             case 'L':
//                 if (direction == Direction[1]) {
//                     if (nextValue == 90) {w = n; n = e; e = 0;direction = Direction[4]}
//                     if (nextValue == 180) {s = n; w = e; n = 0; e = 0;direction = Direction[3]}
//                     if (nextValue == 270) {s = e; e = n; n = 0;direction = Direction[2]}
                    
//                 } else if (direction == Direction[2]) {
//                     if (nextValue == 90) {n = e; e = s; s = 0;direction = Direction[1]}
//                     if (nextValue == 180) {w = e; n = s; e = 0; s = 0;direction = Direction[4]}
//                     if (nextValue == 270) {w = s; s = e; e = 0;direction = Direction[3]}
//                 } else if (direction == Direction[3]) {
//                     if (nextValue == 90) {e = s; s = w; w = 0;direction = Direction[2]}
//                     if (nextValue == 180) {n = s; e = w; s = 0; w = 0;direction = Direction[1]}
//                     if (nextValue == 270) {n = w; w = s; s = 0;direction = Direction[4]}
//                 } else if (direction == Direction[4]) {
//                     if (nextValue == 90) {s = w; w = n; n = 0;direction = Direction[3]}
//                     if (nextValue == 180) {e = w; s = n; w = 0; n = 0;direction = Direction[2]}
//                     if (nextValue == 270) {e = n; n = w; w = 0;direction = Direction[1]}
//                 }
//                 break;
//             case 'R':
//                 if (direction == Direction[1]) {
//                     if (nextValue == 270) {w = n; n = e; e = 0;direction = Direction[4]}
//                     if (nextValue == 180) {s = n; w = e; n = 0; e = 0;direction = Direction[3]}
//                     if (nextValue == 90) {s = e; e = n; n = 0;direction = Direction[2]}
                    
//                 } else if (direction == Direction[2]) {
//                     if (nextValue == 270) {n = e; e = s; s = 0;direction = Direction[1]}
//                     if (nextValue == 180) {w = e; n = s; e = 0; s = 0;direction = Direction[4]}
//                     if (nextValue == 90) {w = s; s = e; e = 0;direction = Direction[3]}
//                 } else if (direction == Direction[3]) {
//                     if (nextValue == 270) {e = s; s = w; w = 0;direction = Direction[2]}
//                     if (nextValue == 180) {n = s; e = w; s = 0; w = 0;direction = Direction[1]}
//                     if (nextValue == 90) {n = w; w = s; s = 0;direction = Direction[4]}
//                 } else if (direction == Direction[4]) {
//                     if (nextValue == 270) {s = w; w = n; n = 0;direction = Direction[3]}
//                     if (nextValue == 180) {e = w; s = n; w = 0; n = 0;direction = Direction[2]}
//                     if (nextValue == 90) {e = n; n = w; w = 0;direction = Direction[1]}
//                 }
//                 break;
//             case 'F':
//                 if (direction == Direction[1]) {an += n * nextValue; ae += e * nextValue}
//                 if (direction == Direction[2]) {ae += e * nextValue; as += s * nextValue}
//                 if (direction == Direction[3]) {as += s * nextValue; aw += w * nextValue}
//                 if (direction == Direction[4]) {aw += w * nextValue; an += n * nextValue}
//                 break;
//         }
//     }
//     if (an > as) {
//         ns = an - as;
//     } else {
//         ns = as - an;
//     }

//     if (ae > aw) {
//         ew = ae - aw;
//     } else {
//         ew = aw - ae;
//     }
//     console.log("PART ONE: The ship's Manhatten distance is", ns + ew);
// }

const partTwo = () => {
const instructions = fs.readFileSync('Day12/input.js', 'utf-8').trim().split('\n')
 
let eastWest= 0
let northSouth= 0
let waypoint = {
  xValue: 10,
  yValue: 1,
  rotation: 0
}
 
const moveShip = (navigate) => {
  const coordinates = navigate.match(/([A-Z]{1})([0-9]*)/i)
  const instruction = coordinates[1]
  const unit = Number(coordinates[2])
 
  switch (instruction) {
    case 'F':
      switch(waypoint.rotation) {
        case 0:
          eastWest += waypoint.xValue * unit
          northSouth += waypoint.yValue * unit
          break;
        case 90:
          eastWest += waypoint.yValue * unit
          northSouth += waypoint.xValue * unit * -1
          break;
        case 180:
          eastWest += waypoint.xValue * unit * -1
          northSouth += waypoint.yValue * unit * -1
          break;
        case 270:
          eastWest += waypoint.yValue * unit * -1
          northSouth += waypoint.xValue * unit
          break;
      }
      break;
    case 'N':
      switch(waypoint.rotation) {
        case 0:
          waypoint.yValue += unit
          break;
        case 90:
          waypoint.xValue -= unit
          break;
        case 180:
          waypoint.yValue -= unit
          break;
        case 270:
          waypoint.xValue += unit
          break;
      }
      break;
    case 'S':
      switch(waypoint.rotation) {
        case 0:
          waypoint.yValue -= unit
          break;
        case 90:
          waypoint.xValue += unit
          break;
        case 180:
          waypoint.yValue += unit
          break;
        case 270:
          waypoint.xValue -= unit
          break;
      }
      break;
    case 'E':
      switch(waypoint.rotation) {
        case 0:
          waypoint.xValue += unit
          break;
        case 90:
          waypoint.yValue += unit
          break;
        case 180:
          waypoint.xValue -= unit
          break;
        case 270:
          waypoint.yValue -= unit
          break;
      }
      break;
    case 'W':
      switch(waypoint.rotation) {
        case 0:
          waypoint.xValue -= unit
          break;
        case 90:
          waypoint.yValue -= unit
          break;
        case 180:
          waypoint.xValue += unit
          break;
        case 270:
          waypoint.yValue += unit
          break;
      }
      break;
    case 'R':
      waypoint.rotation += unit
      if(waypoint.rotation > 270) waypoint.rotation -= 360
      break;
    case 'L':
      waypoint.rotation -= unit
      if(waypoint.rotation < 0) waypoint.rotation += 360
      break;
  }
}
 
instructions.forEach(nav => {
  moveShip(nav)
})
 
if(eastWest< 0) eastWest = eastWest* -1
if(northSouth< 0) northSouth = northSouth* -1
 
console.log("PART ONE: The ship's Manhatten distance is", eastWest + northSouth);

}

// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY TWELVE ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();