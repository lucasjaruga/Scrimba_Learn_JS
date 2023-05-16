let possibleHands = ["rock", "paper", "scissor"]

/**
 * @param arrayHand - array object with possible hands
 */

function generateHand(arrayHand) {
    let randomIndex = Math.floor((Math.random() * 3))
    console.log(randomIndex)
    return arrayHand[randomIndex]
}

let hand1 = generateHand(possibleHands)
let hand2 = generateHand(possibleHands)

console.log("Hand1: " + hand1)
console.log("Hand2: " + hand2)

if (hand1 === "rock" && hand2 === "paper"){
    console.log("Hand2 wins")
} else if (hand1 === "rock" && hand2 === "scissor") {
    console.log("Hand1 wins")
} else if (hand1 === "paper" && hand2 === "rock") {
    console.log("Hand1 wins")
} else if (hand1 === "paper" && hand2 === "scissor") {
    console.log("Hand2 wins")
} else if (hand1 === "scissor" && hand2 === "rock") {
    console.log("Hand2 wins")
} else if (hand1 === "scissor" && hand2 === "paper"){
    console.log("Hand1 wins")
} else {
    console.log("Draw")
}