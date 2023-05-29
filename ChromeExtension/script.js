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
        listItems += `<li>
                        <a target='_blank' href='${myLeads[i]}'>"${myLeads[i]}"</a>
                      </li>`
    }
    ulEl.innerHTML = listItems
}