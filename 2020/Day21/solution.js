const fs = require('fs');


// Part One Answer

// Part Two Answer


const partOne = () => {
    const file = fs.readFileSync('Day21/input.txt', 'utf-8')
    let foods = file.split('\n').map(food => food.split(' (contains ')).map(food => ({ ingredients: new Set(food[0].split(' ')), allergens: new Set(food[1].slice(0, -1).split(', ')) }));
        let ingredients = new Set();
        let allergens = {};
        for (let food of foods) {
            for (let ingredient of food.ingredients) {
                ingredients.add(ingredient);
            }
            for (let allergen of food.allergens) {
                allergens[allergen] = new Set(ingredients);
            }
        }
        for (let [allergen, ingredients] of Object.entries(allergens)) {
            for (let food of foods) {
                if (!food.allergens.has(allergen)) {
                    continue;
                }
                for (let ingredient of new Set(ingredients)) {
                    if (!food.ingredients.has(ingredient)) {
                        ingredients.delete(ingredient);
                    }
                }
            }
        }
        let safeIngredients = new Set(ingredients);
        for (let ingredients of Object.values(allergens)) {
            for (let ingredient of ingredients) {
                safeIngredients.delete(ingredient);
            }
        }
        let appearances = 0;
        for (let food of foods) {
            for (let ingredient of food.ingredients) {
                appearances +=safeIngredients.has(ingredient);
            }
        }
        console.log('PART ONE: Safe ingredients appear', parseInt(appearances, 10), "times");
}

const partTwo = () => {
    const file = fs.readFileSync('Day21/input.txt', 'utf-8')
    let foods = file.split('\n').map(food => food.split(' (contains ')).map(food => ({ ingredients: new Set(food[0].split(' ')), allergens: new Set(food[1].slice(0, -1).split(', ')) }));
        let ingredients = new Set();
        let allergens = {};
        for (let food of foods) {
            for (let ingredient of food.ingredients) {
                ingredients.add(ingredient);
            }
        }
        for (let food of foods) {
            for (let allergen of food.allergens) {
                allergens[allergen] = new Set(ingredients);
            }
        }
        for (let [allergen, ingredients] of Object.entries(allergens)) {
            for (let food of foods) {
                if (!food.allergens.has(allergen)) {
                    continue;
                }
                for (let ingredient of new Set(ingredients)) {
                    if (!food.ingredients.has(ingredient)) {
                        ingredients.delete(ingredient);
                    }
                }
            }
        }
        let list = [];
        let allergensLeft = new Set(Object.keys(allergens));
        while (list.length < Object.keys(allergens).length) {
            let delAllergen;
            let delIngredient;
            for (let allergen of allergensLeft) {
                if (allergens[allergen].size == 1) {
                    delAllergen = allergen;
                    delIngredient = [...allergens[allergen]][0];
                    list.push({ allergen: allergen, ingredient: delIngredient });
                    break;
                }
            }
            allergensLeft.delete(delAllergen);
            for (let [allergen, ingredients] of Object.entries(allergens)) {
                if (allergen != delAllergen) {
                    ingredients.delete(delIngredient);
                }
            }
        }
        list.sort((a, b) => a.allergen > b.allergen ? 1 : -1);
        list = list.map(item => item.ingredient).join(',');
        console.log('PART TWO: Dangerous ingredients:', list);
}


// Setup
const startTime = Date.now()

const preScript = () => {
    console.log("\n\n---------------- DAY TWENTYONE ----------------")
}

const postScript = () => {
    const endTime = Date.now();
    console.log("Completed in ", endTime - startTime, "ms");
}

preScript();
partOne();
partTwo();
postScript();