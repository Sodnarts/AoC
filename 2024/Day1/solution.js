const fs = require('fs');

// Part One Answer

// Part Two Answer

const partOne = () => {
  const file = fs.readFileSync('Day1/input.txt', 'utf-8');

  const leftList = [];
  const rightList = [];

  file.split('').forEach((item, index) => {
    if (index % 6 === 0) {
      leftList.push(item);
    } else if (index % 6 === 4) {
      rightList.push(item);
    }
  });

  const distances = leftList
    .sort((a, b) => a - b)
    .map((left, index) => {
      const right = rightList.sort((a, b) => a - b)[index];
      return left > right ? left - right : right - left;
    });

  const totalDistance = distances.reduce((acc, next) => acc + next);

  console.log('PART ONE: The total distance between the two lists is', totalDistance);
};

const partTwo = () => {
  const file = fs.readFileSync('Day1/input.txt', 'utf-8');
  const arr = file.split('\n');
};

// Setup
const startTime = Date.now();

const preScript = () => {
  console.log('\n\n---------------- DAY ONE ----------------');
};

const postScript = () => {
  const endTime = Date.now();
  console.log('Completed in ', endTime - startTime, 'ms');
};

preScript();
partOne();
partTwo();
postScript();
