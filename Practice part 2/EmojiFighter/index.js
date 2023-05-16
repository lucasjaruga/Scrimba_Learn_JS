let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let emoji1 = fighters[generateRandomIndex(fighters)]
    let emoji2 = fighters[generateRandomIndex(fighters)]

    stageEl.textContent = emoji1 + " VS " + emoji2
})

/**
 * @function - return a random number based on the Array lenght
 * @param array - array length which we wanna use to calculate random index
*/
function generateRandomIndex(array){
    return Math.floor(Math.random() * array.length)
}