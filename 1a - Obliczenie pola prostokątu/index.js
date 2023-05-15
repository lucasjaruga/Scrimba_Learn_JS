document.getElementById("firstSide").addEventListener(`click`, calculateArea)


function calculateArea() {
    let firstSide
    let secondSide
    firstSide = document.getElementById("firstSide").value

    secondSide = document.getElementById("secondSide").value
    
    let areaValue = firstSide * secondSide
    document.getElementById("area").innerText = "Pole wynosi: " + areaValue
}