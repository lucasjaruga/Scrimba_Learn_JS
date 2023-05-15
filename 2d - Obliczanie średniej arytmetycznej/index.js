let number
let sumOfNumbers = 0
let noNumbers = 0

function buildOutput() {
    let answer = document.getElementById("answer")
    answer.innerText = calcValue()
}

function calcValue() {

    number = Number(document.getElementById("number").value)

    [].reduce()

    if (number < 0) {
        return "Błędna liczba! Wpisz liczbę naturalną";
    }
    noNumbers++
    sumOfNumbers += number

    if (number > 0) {
        return " Liczba: " + number + " dodana! Wprowadź kolejną liczbę ciągu"
    }
    let result
    if (noNumbers > 1) {
        --noNumbers
        result = sumOfNumbers / noNumbers
    } else {
        result = sumOfNumbers / noNumbers
    }
    return "Średnia arytmetyczna podanego ciągu to: " + result

}