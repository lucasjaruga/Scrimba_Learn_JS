let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊", "🍊", "🍊", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.


/**
 * @param arrayWithFruits - array which stores fruits to sort
 */
function sortFruits(arrayWithFruits){
    for(let i = 0; i < arrayWithFruits.length; i++) {
        if(fruit[i] === "🍎"){
            appleShelf.textContent += arrayWithFruits[i]
        } else {
            orangeShelf.textContent += arrayWithFruits[i]
        }
    }
}

sortFruits(fruit)