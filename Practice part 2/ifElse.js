let age = 66

function verifyDiscount() {
    let discount

    if (age < 6){
        discount = "free"
    } else if (age  < 18) {
        discount = "child discount"
    } else if (age < 27) {
        discount = "student discount"
    } else if (age < 67) {
        discount = "full prize"
    } else {
        discount = "senior citizen discount"
    } 

    return console.log("Discount type: " + discount)
}

verifyDiscount()