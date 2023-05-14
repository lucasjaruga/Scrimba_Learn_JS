let baseNumber
let exponentNumber
let asnwer

function calcValue() {
    
    baseNumber = Number(document.getElementById("baseNumber").value)
    exponentNumber = Number(document.getElementById("exponentNumber").value)
    answer = document.getElementById("answer")
            
    if(baseNumber == 0) {
        answer.innerText = "Wynik potęgowania " + baseNumber + " do potęgi " + exponentNumber + " to: 0"
    } else if (exponentNumber == 0){
        answer.innerText = "Wynik potęgowania " + baseNumber + " do potęgi " + exponentNumber + " to: 1"
    } else if (exponentNumber == 1){
        answer.innerText = "Wynik potęgowania " + baseNumber + " do potęgi " + exponentNumber + " to: " + baseNumber
    } else {
        let result = baseNumber
        let multiplying = exponentNumber
        
        while (multiplying > 1){
            result = result * baseNumber
            multiplying--
        }
        answer.innerText = "Wynik potęgowania " + baseNumber + " do potęgi " + exponentNumber + " to: " + result
    }
}