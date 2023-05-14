let number

function verifyNumber() {
    
    number = Number(document.getElementById("number").value)
    
    if(number % 2 == 0) {
        document.getElementById("answer").innerText = "Podana liczba jest parzysta"
    } else {
        document.getElementById("answer").innerText = "Podana liczba jest nie parzysta"
    }
}