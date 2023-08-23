const fs = require('fs');
const path = require('path');

let directories = {};
let levels = []
let sizes = {}
let totalSize = 0;
let totalDiskSpace = 70000000;
let dirToDelete = 70000000;

const partOne = () => {
    const file = fs.readFileSync('Day7/input.txt', 'utf-8')
    const arr = file.split('\n')

    arr.forEach(a => {
        if (a[0] == "$" && (a[2] + a[3]) == "cd") {
            if (a[5] + a[6] == "..") {
                levels.pop();
            } else {
                levels.push(a.substring(5, a.length + 1))
                addDirectory({})
            }
        } else if (a[0] != "$" && a[0] != "d") {
            addFile(a.split(" ")[1], a.split(" ")[0])
        }
    })
    loopObject(directories[levels[0]], levels[0]);
    loopSizes();
    
    // console.log("PART ONE: The total size of directories smaller than 100.000 is", totalSize)
}

const partTwo = () => {
    const file = fs.readFileSync('Day7/input.txt', 'utf-8')
    const arr = file.split('\n')
    directories = {};
    levels = [];
    sizes = {};

    arr.forEach(a => {
        if (a[0] == "$" && (a[2] + a[3]) == "cd") {
            if (a[5] + a[6] == "..") {
                levels.pop();
            } else {
                levels.push(a.substring(5, a.length + 1))
                addDirectory({})
            }
        } else if (a[0] != "$" && a[0] != "d") {
            addFile(a.split(" ")[1], a.split(" ")[0])
        }
    })
    loopObject(directories[levels[0]], levels[0]);
    loopSizesP2();
   
    // console.log("PART TWO: The smallest directory over 3.000.000 is", dirToDelete)
}

const loopSizes = () => {
    for (s in sizes) {
        if (sizes[s] <= 100000) {
            totalSize += sizes[s];
        }
    }
}

const loopSizesP2 = () => {
    for (s in sizes) {
        if (sizes[s] > totalDiskSpace - sizes["/"]) console.log(sizes[s], sizes)
        if (sizes[s] > totalDiskSpace - sizes["/"] && sizes[s] < dirToDelete) {
            dirToDelete = sizes[s];
        }
    }   
}

const loopObject = (directory, dir) => {
    let size = 0;

    for (d in directory) {
        if (typeof directory[d] == "string" && sizes[dir] == undefined) {
            sizes[dir] = parseInt(directory[d], 10);
            size += parseInt(directory[d], 10);
        } else if (typeof directory[d] == "string") {
            sizes[dir] += parseInt(directory[d], 10);
            size += parseInt(directory[d], 10);
        } else if (typeof directory[d] == "object" && sizes[dir] == undefined) {
            sizes[dir] = loopObject(directory[d], d);
            size += loopObject(directory[d], d);
        } else if (typeof directory[d] == "object") {
            sizes[dir] += loopObject(directory[d], d);
            size += loopObject(directory[d], d);
        }
    }
    return size;
}

const addDirectory = (itemToAdd) => {

    switch (levels.length) {
        case 1:
            if (directories[levels[0]] == undefined) {
                directories[levels[0]] = itemToAdd
            }
            break;
        case 2:
            if (directories[levels[0]][levels[1]] == undefined) {
                directories[levels[0]][levels[1]] = itemToAdd
            }
            break;
        case 3:
            if (directories[levels[0]][levels[1]][levels[2]] == undefined) {
                directories[levels[0]][levels[1]][levels[2]] = itemToAdd
            }
            break;
        case 4:
            if (directories[levels[0]][levels[1]][levels[2]][levels[3]] == undefined) {
                directories[levels[0]][levels[1]][levels[2]][levels[3]] = itemToAdd
            }
            break;
        case 5:
            if (directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]] == undefined) {
                directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]] = itemToAdd
            }
            break;
        case 6:
            if (directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]] == undefined) {
                directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]] = itemToAdd
            }
            break;
        case 7:
            if (directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][levels[6]] == undefined) {
                directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][levels[6]] = itemToAdd
            }
            break;
        case 8:
            if (directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][levels[6]][levels[7]] == undefined) {
                directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][levels[6]][levels[7]] = itemToAdd
            }
            break;
        case 9:
            if (directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][levels[6]][levels[7]][levels[8]] == undefined) {
                directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][levels[6]][levels[7]][levels[8]] = itemToAdd
            }
            break;
        case 10:
            if (directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][levels[6]][levels[7]][levels[8]][levels[9]] == undefined) {
                directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][levels[6]][levels[7]][levels[8]][levels[9]] = itemToAdd
            }
            break;
        case 11:
            if (directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][levels[6]][levels[7]][levels[8]][levels[9]][levels[10]] == undefined) {
                directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][levels[6]][levels[7]][levels[8]][levels[9]][levels[10]] = itemToAdd
            }
            break;
    }
}

const addFile = (fileName, fileSize) => {

    switch (levels.length) {
        case 1:
                directories[levels[0]][fileName] = fileSize
            break;
        case 2:
                directories[levels[0]][levels[1]][fileName] = fileSize
            break;
        case 3:
                directories[levels[0]][levels[1]][levels[2]][fileName] = fileSize
            break;
        case 4:
                directories[levels[0]][levels[1]][levels[2]][levels[3]][fileName] = fileSize
            break;
        case 5:
                directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][fileName] = fileSize
            break;
        case 6:
                directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][fileName] = fileSize
            break;
        case 7:
                directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][levels[6]][fileName] = fileSize
            break;
        case 8:
                directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][levels[6]][levels[7]][fileName] = fileSize
            break;
        case 9:
                directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][levels[6]][levels[7]][levels[8]][fileName] = fileSize
            break;
        case 10:
                directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][levels[6]][levels[7]][levels[8]][levels[9]][fileName] = fileSize
            break;
        case 11:
                directories[levels[0]][levels[1]][levels[2]][levels[3]][levels[4]][levels[5]][levels[6]][levels[7]][levels[8]][levels[9]][levels[10]][fileName] = fileSize
            break;
    }
}

// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY SEVEN ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();


// TODO: Copied answer.

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n');

class File {
	constructor(name, size) {
		this.name = name;
		this._size = size;
	}

	size() {
		return this._size;
	}
}

class Dir {
	constructor(name, parentDir) {
		this.isDir = true;
		this.parentDir = parentDir;
		this.name = name;
		this.contents = [];
	}

	// This should be cached, but our input is small enough that its OK to always recompute
	size(ignore) {
		if (ignore === this) {
			return 0;
		}

		return this.contents.map((v) => v.size(ignore)).reduce((a, b) => a + b, 0);
	}
}

class Filesystem {
	constructor(instructions) {
		this.rootDir = new Dir('/', null);
		this.build(instructions);
	}

	size(ignore) {
		return this.rootDir.size(ignore);
	}

	build(instructions) {
		let currentDir = this.rootDir;
		for (let line of instructions) {
			if (line.startsWith('$ cd')) {
				const [, dir] = /\$ cd (.+)$/.exec(line);
				if (dir === '/') {
					currentDir = this.rootDir;
				} else if (dir === '..') {
					currentDir = currentDir.parentDir;
				} else {
					currentDir = currentDir.contents.find((v) => v.isDir && v.name === dir);
				}
			} else if (line.startsWith('$ ls')) {
				continue;
			} else {
				// In a `ls` output
				if (line.startsWith('dir ')) {
					const [, dirName] = /dir (.+)$/.exec(line);
					const newDir = new Dir(dirName, currentDir);
					currentDir.contents.push(newDir);
				} else {
					// file
					let [, size, fileName] = /(\d+) (.+)$/.exec(line);
					size = parseInt(size, 10);

					const newFile = new File(fileName, size);
					currentDir.contents.push(newFile);
				}
			}
		}
	}

	static *walk(dir) {
		for (let c of dir.contents) {
			yield c;
			if (c.isDir) {
				yield* Filesystem.walk(c);
			}
		}
	}

	*[Symbol.iterator]() {
		yield* Filesystem.walk(this.rootDir);
	}
}

const drive = new Filesystem(input);
const dirs = [...drive].filter((v) => v.isDir);

// Part one
let smallDirsSum = 0;
for (let item of dirs) {
	let size = item.size();
	if (size <= 100000) {
		smallDirsSum += size;
	}
}

// Part two
let couldWork = new File('dummy', Number.MAX_VALUE);
const DRIVE_SIZE = 70000000;
for (let someDir of dirs) {
	const sizeWithoutSomeDir = drive.size(someDir);
	const unusedSpace = DRIVE_SIZE - sizeWithoutSomeDir;
	if (unusedSpace >= 30000000) {
		if (someDir.size() < couldWork.size()) {
			couldWork = someDir;
		}
	}
}

console.log('PART ONE: The total size of directories smaller than 100.000 is', smallDirsSum);
console.log('PART TWO: The smallest directory over 3.000.000 is', couldWork.size());