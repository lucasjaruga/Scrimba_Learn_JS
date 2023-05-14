let firstSide
let secondSide
let thirdSide

function verifySidesOfTriangle() {
    
    firstSide = Number(document.getElementById("firstNumber").value)
    secondSide = Number(document.getElementById("secondNumber").value)
    thirdSide = Number(document.getElementById("thirdNumber").value)

    let answer = document.getElementById("answer")

    if(firstSide < 0 || secondSide < 0 || thirdSide < 0){
        answer.innerText = "Któryś z boków jest mniejszy niż 0. Wprowadź prawidłowy wymiar"
    } else {
        if( firstSide > secondSide + thirdSide || secondSide > firstSide + thirdSide || thirdSide > firstSide + secondSide){
            answer.innerText = "Nie jest możliwe zbudowanie trójkąta z tych boków"
        } else {
            answer.innerText = "Można zbudować trójkąt z tych boków"
        }        
    }    
}