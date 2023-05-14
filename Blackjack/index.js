let firstCard = 4
let secondCard = 9
let cards = [firstCard, secondCard]
let sumOfCards = firstCard + secondCard
let blackJack = false
let isAlive = true
let  message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sumOfCards

    if ( sumOfCards < 21) {
        message = "Do you want to draw a new card?"
    } else if (sumOfCards === 21) {
        message = "You've got Blackjack!"
        blackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    let newCard = 8
    sumOfCards += newCard
    cards.push(newCard)
    renderGame()
}