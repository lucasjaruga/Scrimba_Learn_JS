const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const saveButton = document.getElementById("input-btn")
let myLeads = []

saveButton.addEventListener("click", function (){
    myLeads.push(inputEL.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}