let number
let sumOfNumbers = 0
let noNumbers = 0

function calcValue() {
    
    number = Number(document.getElementById("number").value)
    let answer = document.getElementById("answer")
    
    if(number < 0) {
        answer.innerText = "Błędna liczba! Wpisz liczbę naturalną"
    } else {
        noNumbers++
        sumOfNumbers += number

        if (number > 0){
            answer.innerText = " Liczba: " + number + " dodana! Wprowadź kolejną liczbę ciągu"
        } else {
            let result
            if(noNumbers > 1){
                --noNumbers
                result = sumOfNumbers / noNumbers
            } else {
                result = sumOfNumbers / noNumbers
            }
            answer.innerText = "Średnia arytmetyczna podanego ciągu to: " + result
        }
    }
}