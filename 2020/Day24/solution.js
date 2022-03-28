const INPUT_FILE = 'Day24/input.txt';
const DAYS = 100;

/**
 * A hash set that provides proper equivalence semantics for any data type.
 * For an object type, override the toString() method to return a unique, identifying string.
 * Values must be effectively immutable - updates to objects after being stored will NOT be reflected and will result in undefined behavior.
 * @template TValue Type of value to store
 */
class MapSet {
    constructor() {
        /** @type {Map<string, TValue>} */
        this._map = new Map();
    }

    add(value) {
        this._map.set(String(value), value);
    }

    has(value) {
        return this._map.has(String(value));
    }

    delete(value) {
        return this._map.delete(String(value));
    }

    forEach(callback) {
        for (const value of this._map.values()) {
            callback(value, this);
        }
    }

    toArray() {
        return Array.from(this._map.values());
    }

    get size() {
        return this._map.size;
    }
}

/** @typedef {'se'|'sw'|'ne'|'nw'|'e'|'w'} Direction One of the six possible directions away from a tile on a hex grid. */
/** @typedef {Direction[]} Path A list of relative directions that leads from (0,0) to a tile. */
/** @typedef {[number, number]} Coord An (x,y) coordinate pair representing a unique tile. */

/** @type {Path[]} Array of paths to follow */
const input = require('fs').readFileSync(INPUT_FILE, 'utf-8')
    .split('\n')
    .map(line => Array.from(line.matchAll(/(?:se|sw|ne|nw|e|w)/g)).map(match => match[0]))
;

/** Map of directions to the (x,y) offset that it represents */
const DirectionOffsets = {
    /** @type {[Coord, Coord]} */ ne: [[ -1,  1 ], [ -1,  0 ]],
    /** @type {[Coord, Coord]} */ e:  [[  0,  1 ], [  0,  1 ]],
    /** @type {[Coord, Coord]} */ se: [[  1,  1 ], [  1,  0 ]],
    /** @type {[Coord, Coord]} */ sw: [[  1,  0 ], [  1, -1 ]],
    /** @type {[Coord, Coord]} */ w:  [[  0, -1 ], [  0, -1 ]],
    /** @type {[Coord, Coord]} */ nw: [[ -1,  0 ], [ -1, -1 ]]
};

/** @type {Direction[]} All direction name */
const AllDirections = [ 'ne', 'e', 'se', 'sw', 'w', 'nw' ];

/**
 * Gets the coordinates of all nieghbors of a tile.
 * @param {Coord} coord Coordinate of the tile
 * @returns {Coord[]} Coordinates of all neighbors
 */
function getAllNeighbors(coord) {
    // Select even or odd lookup table
    const evenOdd = Math.abs(coord[0] % 2);
    
    // Cross lookup table with current coordinate to compute all neighbors
    return AllDirections
        .map(dir => DirectionOffsets[dir][evenOdd])
        .map(offset => [ offset[0] + coord[0], offset[1] + coord[1] ]);
}

/**
 * Runs part 1 and returns the coordinates of all flipped tiles.
 * @returns {MapSet<Coord>}
 */
function part1() {
    /** @type {MapSet<Coord>} Coordinates of all tiles that are currently black side up */ 
    const blackTiles = new MapSet();

    // Process each path
    for (const path of input) {
        /** @type {Coord} */
        const coord = [ 0, 0 ];

        // Follow each step of the current path
        for (const dir of path) {
            // Get the offset for the current direction
            const offset = DirectionOffsets[dir][Math.abs(coord[0] % 2)];

            // Apply offset
            coord[0] += offset[0];
            coord[1] += offset[1];
        }

        // Flip the tile
        if (blackTiles.has(coord)) {
            // Flip black -> white
            blackTiles.delete(coord);
    
        } else {
            // Flip white -> black
            blackTiles.add(coord);
        }
    }

    return blackTiles;
}

/**
 * Runs part 2 and returns the coordinates of all flipped tiles.
 * @param {MapSet<Coord>} initialState 
 * @returns {MapSet<Coord>}
 */
function part2(initialState) {
    // simulate each day
    for (let day = 0; day < DAYS; day++) {
        // Identify all coordinates that are "in scope" for this day
        const inScope = new MapSet();
        initialState.forEach(coord => {
            // Every flipped tile is in scope
            inScope.add(coord);
            // Neighbors of flipped states are in scope
            getAllNeighbors(coord).forEach(adjacent => inScope.add(adjacent));
        });

        // Compute the next state
        const newState = new MapSet();
        inScope.forEach(coord => {
            // Count flipped neighbors of this tile
            const adjacentCount = getAllNeighbors(coord).reduce((count, adjacent) =>
                initialState.has(adjacent) ? (count + 1) : count
            , 0);

            if (initialState.has(coord)) {
                if (adjacentCount === 1 || adjacentCount === 2) {
                    // If tile is flipped and has 1 or 2 flipped neighbors, then keep flipped
                    newState.add(coord);
                }
            } else {
                if (adjacentCount === 2) {
                    // If tile is NOT flipped but has 2 neighbors, then flip
                    newState.add(coord);
                }
            }
        });

        // switch to new state
        initialState = newState;
    }

    return initialState;
}

// Part 1
const part1Flipped = part1();
console.log(`Part 1: There are ${ part1Flipped.size } flipped tiles.`);

// Part 2
const part2Flipped = part2(part1Flipped);
console.log(`Part 2: There are ${ part2Flipped.size } flipped tiles.`);