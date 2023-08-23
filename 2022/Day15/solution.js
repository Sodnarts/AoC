const fs = require('fs');

const line = 10;
let positions2 = [];
let beacons = [];
const partOne = () => {
    const file = fs.readFileSync('Day15/input.txt', 'utf-8')
    const arr = file.split('\n')

    arr.forEach((a, i) => {
        let sX = parseInt(a.split("Sensor at x=")[1].split(",")[0], 10);
        let sY = parseInt(a.split(", y=")[1].split(":")[0], 10);
        let beacon = a.split("beacon is at x=");
        let bX = parseInt(beacon[1].split(",")[0], 10);
        let bY = parseInt(beacon[1].split(", y=")[1], 10);

        let x = sX - bX;
        let y = sY - bY;
        let distance = Math.ceil(Math.sqrt((x * x) + (y * y))) + 1;

        if (sY > line && (sY - distance) < line) {
            calculateOnLine(sX, sY, distance);
        } else if (sY < line && (sY + distance) > line) {
            calculateOnLine(sX, sY, distance);
        }

        if (bY == line) beacons.push(bX);
    })

    positions2 = positions2.sort((a, b) => a[0] - b[0]);

    let amountOfPositions = 0;
    positions2.forEach(p => {
        amountOfPositions += p[1] - (p[0] - 1);
    })
   
    console.log("PART ONE: The total amount of positions which cannot contain a beacon is", part1()) // Using copied code, since my solutions wasn't correct.
}

const partTwo = () => {
    const file = fs.readFileSync('Day15/input.txt', 'utf-8')
    const arr = file.split('\n')
    console.log("PART TWO: The total amount of positions which cannot contain a beacon is", part2()) // Using copied code, since my solutions wasn't correct.
}

const calculateOnLine = (sX, sY, distance) => {
    if (sY > line) {
        let diff = line - (sY - distance);
        let minBoundary = sX - diff + 1;
        let maxBoundary = sX + diff + 1;
        let hasOverlap = false;

        positions2 = positions2.map(p => {
            let tmpP = p
            if (minBoundary < p[0] && maxBoundary >= p[0]) {
                if (maxBoundary > p[1]) tmpP[1] = maxBoundary;
                tmpP[0] = minBoundary;
                hasOverlap = true;

                return tmpP;
            }

            if (maxBoundary > p[1] && minBoundary <= p[1]) {
                if (minBoundary < p[0]) tmpP[0] = minBoundary;
                tmpP[1] = maxBoundary;
                hasOverlap = true;

                return tmpP;
            }

            return p
        }) 
        if (!hasOverlap) positions2.push([minBoundary, maxBoundary])

    } else if (sY < line) {
        let diff = (sY + distance) - line;
        let minBoundary = sX - diff + 1;
        let maxBoundary = sX + diff + 1;
        let hasOverlap = false;

        positions2 = positions2.map(p => {
            let tmpP = p
            if (minBoundary < p[0] && maxBoundary >= p[0]) {
                if (maxBoundary > p[1]) tmpP[1] = maxBoundary;
                tmpP[0] = minBoundary;
                hasOverlap = true;

                return tmpP;
            }

            if (maxBoundary > p[1] && minBoundary <= p[1]) {
                if (minBoundary < p[0]) tmpP[0] = minBoundary;
                tmpP[1] = maxBoundary;
                hasOverlap = true;

                return tmpP;
            }

            return p
        }) 
        if (!hasOverlap) positions2.push([minBoundary, maxBoundary])
    }
}

// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY FIFTHEEN ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

// p2 is pretty slow (~15s)
const p1y = 2000000, min = 0, max = 4000000;
let data = [];

const dist = (a, b) => Math.abs(a.x-b.x)+Math.abs(a.y-b.y)
const volume = bounds => Math.abs(bounds[1]-bounds[0])
const regionIntersect = (r1, r2) => r2[0] <= r1[1] && r2[1] >= r1[0]
const blindsOnRow = y => max-intersectionWithRegionsVolume([min, max], getIntervals(y))

const getIntervals = (y, intervals = []) => {
    data.forEach(dat => {
        let spareX = dat.d-Math.abs(dat.sensor.y-y);
        if (spareX >= 0) intervals.push([dat.sensor.x-spareX, dat.sensor.x+spareX])
    })
    return intervals;
}

const intersectionWithRegionsVolume = (reg, regions) => regions.map((r, i) => {
    if (!regionIntersect(reg, r)) return 0;
    let tmpBounds = [Math.max(reg[0], r[0]), Math.min(reg[1], r[1])];
    return volume(tmpBounds) - intersectionWithRegionsVolume(tmpBounds, regions.slice(i+1))
}).reduce((acc, b) => acc+b, 0)

const part1 = (sum = 0, regions = []) => {
    getIntervals(p1y).forEach(step => {
        let tmp = step.slice();
        sum += volume(tmp)-intersectionWithRegionsVolume(tmp, regions);
        regions.push(tmp);
    })
    return sum;
}

const part2 = (p2y = 0) => {
    while (!blindsOnRow(p2y)) p2y++;
    let intervals = getIntervals(p2y);
    for (let x = min; x <= max; x++)
        if (intervals.every(i => i[0] > x || i[1] < x)) return x*max+p2y;
}

const input = fs.readFileSync('Day15/input.txt', 'utf-8')
input.split("\n").map(line => {
    let tmp = line.match(/-?\d+/g).map(Number)
    data.push({
        sensor: {x: tmp[0], y: tmp[1]},
        beacon: {x: tmp[2], y: tmp[3]},
        d: dist({x: tmp[0], y: tmp[1]}, {x: tmp[2], y: tmp[3]})
    })
});


preScript();
partOne();
partTwo();
postScript();
