const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const saveButton = document.getElementById("input-btn")
let myLeads = []

saveButton.addEventListener("click", function (){
    myLeads.push(inputEL.value)
    console.log(myLeads)
    inputEL.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}











// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)