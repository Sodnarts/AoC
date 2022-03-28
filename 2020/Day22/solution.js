const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day22/input.txt', 'utf-8')
    const arr = file.split('\n\n');
    const player1 = arr[0].split('\n').map(x => parseInt(x));
    const player2 = arr[1].split('\n').map(x => parseInt(x));
    player1.shift();
    player2.shift();
    
    let hasCards = true;
    while(hasCards) {
        const p1 = draw(player1);
        const p2 = draw(player2);
        
        if (p1 > p2) {
            player1.push(p1)
            player1.push(p2);
        }
        if (p1 < p2) {
            player2.push(p2)
            player2.push(p1);
        }

        if (player1.length == 0) hasCards = false;
        if (player2.length == 0) hasCards = false;
    }
    let winningPlayer = [];
    let playerName = "";

    if (player1.length == 0) { winningPlayer = player2; playerName = "Player2" }
    if (player2.length == 0) { winningPlayer = player1; playerName = "Player1" }

    let score = 0;
    for (let i = 0; i < winningPlayer.length; i++) {
        score += (winningPlayer.length - i) * winningPlayer[i];
    }
    
    console.log("PART ONE: ", playerName, "has won the game with a score of", score);
}

const file = fs.readFileSync('Day22/input.txt', 'utf-8')
const arr = file.split('\n\n');
const player1 = arr[0].split('\n').map(x => parseInt(x));
const player2 = arr[1].split('\n').map(x => parseInt(x));
player1.shift();
player2.shift();

const partTwo = () => {
    let winningPlayer = playGame(player1, player2, 1);
    let score = 0;
    if (winningPlayer == 1) { 
        for (let i = 0; i < player1.length; i++) {
            score += (player1.length - i) * player1[i];
        }
    }
    if (winningPlayer == 2) { 
        for (let i = 0; i < player2.length; i++) {
            score += (player2.length - i) * player2[i];
        }
    }
    console.log("PART TWO: ", winningPlayer, "has won the game with a score of", score);
}

const playGame = (deck1, deck2, k) => {
    const previousRounds = new Set();
    let winningPlayer = 0;
    let hasCards = true;
    while(hasCards) {
        const state = deck1.join(',') + '#' + deck2.join(',');
        if(previousRounds.has(state)) {
            hasCards = false;
            winningPlayer = 1;
        } else {
        previousRounds.add(state);
            const p1 = draw(deck1);
            const p2 = draw(deck2);
            
            if (p1 <= deck1.length && p2 <= deck2.length) {
                const d1 = drawSubgameDeck(deck1, p1);
                const d2 = drawSubgameDeck(deck2, p2);
                winningPlayer = playGame(d1, d2, k + 1);
            } else {
                winningPlayer = p1 > p2 ? 1 : 2;
            }
            if (winningPlayer == 1) { deck1.push(p1); deck1.push(p2); }
            if (winningPlayer == 2) { deck2.push(p2); deck2.push(p1); }

            if (deck1.length == 0) { hasCards = false; winningPlayer = 2; }
            if (deck2.length == 0) { hasCards = false; winningPlayer = 1; }
        }
    }
    return winningPlayer;
}

const draw = (deck) => {
    return deck.shift();
}

const drawSubgameDeck = (deck, amount) => {
    let newDeck = [];
    for (let i = 0; i < amount; i++) {
        newDeck.push(deck[i]);
    }
    return newDeck;
}

// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY TWENTYTWO ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();
