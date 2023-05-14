let firstNumber
let secondNumber

function calcValue() {
    firstNumber = Number(document.getElementById("firstNumber").value)
    secondNumber = Number(document.getElementById("secondNumber").value)

    let sortedNumbers = []

    if( firstNumber > secondNumber){
        sortedNumbers[0] = firstNumber
        sortedNumbers[1] = secondNumber
    } else {
        sortedNumbers[0] = secondNumber
        sortedNumbers[1] = firstNumber
    }
    
    let reminder = 1

    while (reminder != 0){
        let auxiliaryValue = Math.floor(sortedNumbers[0] / sortedNumbers[1])
        reminder = sortedNumbers[0] - auxiliaryValue * sortedNumbers[1]
        sortedNumbers[0] = sortedNumbers[1]
        sortedNumbers[1] = reminder
    }

    let answer = document.getElementById("answer")
    answer.innerText = "NWD liczby " + firstNumber + " oraz liczby " + secondNumber + " wynosi: " + sortedNumbers[0]
}