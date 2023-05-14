let number
let noNumbers
let result = 0
let answer = document.getElementById("answer")

function calcValue() {
    
    number = Number(document.getElementById("number").value)
    result += number
    noNumbers--

    if (noNumbers > 0){
        answer.innerText = "Dodano liczbę " + number + ". Wprowadź kolejną liczbę z ciągu"
    } else {
        answer.innerText = "Suma liczb w ciągu to: " + result
        document.getElementById("calcValue-btn").style.display = "none"
        document.getElementById("newCalc-btn").style.display = "inline"
    }
}

function howManyNumbers() {
    noNumbers = Number(document.getElementById("number").value)

    if(noNumbers > 0) {
        document.getElementById("noNumbers-btn").style.display = "none"
        document.getElementById("calcValue-btn").style.display = "inline"
        answer.innerText = "Ilość liczb w ciągu wyniesie: " + noNumbers + ". Podaj pierwszą liczbę:"
    } else {
        answer.innerText = "Brak liczb w ciągu."
    }
}

function newCalc(){
    document.getElementById("newCalc-btn").style.display = "none"
    document.getElementById("noNumbers-btn").style.display = "inline"
    document.getElementById("calcValue-btn").style.display = "none"
}