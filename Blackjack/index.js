let firstCard = 4
let secondCard = 9
let sumOfCards = firstCard + secondCard
let blackJack = false
let isAlive = true
let  message = ""
let messageEl = document.getElementById("message-el")

function startGame() {
    if ( sumOfCards < 21) {
        message = "Do you want to draw a new card?"
    } else if (sumOfCards === 21) {
        message = "Wohoo! You've got Blackjack!"
        blackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}