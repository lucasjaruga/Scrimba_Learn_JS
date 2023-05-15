let cards = []
let sumOfCards = 0
let blackJack = false
let isAlive = false
let  message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    isAlive = true
    
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    
    cards.push(firstCard)
    cards.push(secondCard)
    for(let i = 0; i < cards.length; i++){
        sum += cards[i]
    }
    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1)
    if(randomNumber === 1){
        return 11
    } else if (randomNumber >10 && randomNumber < 13) {
        return 10
    } else {
        return randomNumber
    }
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
    let newCard = getRandomCard()
    sumOfCards += newCard
    cards.push(newCard)
    renderGame()
}