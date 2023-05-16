let age = 33

function verifyDiscount() {
    let discount

    if (age < 6){
        discount = "free"
    } else if (age >= 6 && age <= 17) {
        discount = "child discount"
    } else if (age >= 18 && age <= 26) {
        discount = "student discount"
    } else if (age >= 27 && age <= 66) {
        discount = "full prize"
    } else {
        discount = "senior citizen discount"
    } 

    return console.log("Discount type: " + discount)
}

verifyDiscount()