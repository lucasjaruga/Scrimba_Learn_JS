

function compareNumbers() {
    
    let firstNumber
    let secondNumber
    
    firstNumber = Number(document.getElementById("firstNumber").value)
    secondNumber = Number(document.getElementById("secondNumber").value)

    if(firstNumber == secondNumber) {
        document.getElementById("lowerNumber").innerText = "Podane liczby są sobie równe"
    } else {
        let lowerNumber

        if(firstNumber > secondNumber) {
            lowerNumber = secondNumber
        } else {
            lowerNumber = firstNumber
        }

        document.getElementById("lowerNumber").innerText = "Mniejsza liczba to: " + lowerNumber
    }   
}