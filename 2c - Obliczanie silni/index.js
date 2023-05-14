let number

function calcFactorial() {
    
    number = Number(document.getElementById("number").value)
    let answer = document.getElementById("answer")
    
    if ( number >= 0 ){
        if( number == 0 || number == 1 ){
            answer.innerText = "Silnia wynosi: 1"     
        } else {
            let result = number*(number-1)
            --number
            while(number > 1){
                result = result * (number-1)
                --number
            }
            answer.innerText = "Silnia wynosi: " + result
        }
    } else {
        answer.innerText = "Błędna liczba. Dziedzina Silnik to liczby N. Wprowadź prawidłową liczbę"
    }
}