let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

console.log("The largest countries before modification: ")

checkElementsOfArray(largeCountries)
largeCountries.shift("China")
largeCountries.pop("Pakistan")
largeCountries.unshift("Tuvalu")
largeCountries.push("Monaco")

console.log("") // break line

console.log("The largest countries after modification: ")
checkElementsOfArray(largeCountries)

console.log("") // break line
largeCountries.shift()
largeCountries.unshift("China")
largeCountries.pop()
largeCountries.push("Pakistan")

console.log("The largest countries after another modification: ")
checkElementsOfArray(largeCountries)

/**
 * @param array - array object whose elements we want to print to console
 */
function checkElementsOfArray(array) {
    for (let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}