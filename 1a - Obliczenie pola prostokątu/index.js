let firstSide
let secondSide

function calculateArea() {
    
    firstSide = document.getElementById("firstSide").value

    secondSide = document.getElementById("secondSide").value
    
    let areaValue = firstSide * secondSide
    document.getElementById("area").innerText = "Pole wynosi: " + areaValue
}