let a
let b
let c

function calcRoots() {

    let answer = document.getElementById("answer")
    
    a = Number(document.getElementById("a").value)
    
    if( a == 0 ){
        answer.innerText = "To nie jest trójmian kwadratowy. Podaj prawidłowe a"
    } else {
        b = Number(document.getElementById("b").value)
        c = Number(document.getElementById("c").value)

        let delta = b*b - 4*a*c

        if( delta == 0){
            let root1 = -(b)/2*a
            answer.innerText = "Ten trójmian ma jeden pierwiastek: " + root1
        } else if (delta > 0) { 
            let deltaRoot = Math.sqrt(delta)
            let root1 = (-b - deltaRoot) / (2*a)
            let root2 = (-b + deltaRoot) / (2*a)

            answer.innerText = "Ten trójmian ma dwa pierwiastki. Pierwszy to:  " + root1 + ", a drugi to " + root2
        } else {
            answer.innerText = "Ten trójmian nie ma pierwiastków"
        }
    }    
}