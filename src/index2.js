const api = new ApiService

function init() {
    eventListeners()
}


function eventListeners() {
    const newUserForm = document.querySelector("form")
        newUserForm.addEventListener("submit", submitUser) 
    const duplicateButton = document.getElementById("duplicate")
        duplicateButton.addEventListener("click", duplicateTimeslotEntry)
    const newTimeslotForm = document.querySelector("#new-timeslot-form")   
    newTimeslotForm.addEventListener("submit", submitTimeslot)
}

function submitUser(event) {
    event.preventDefault()
    api.createNewUser(new FormData(event.target))
    .then(response => {
        if(!response.error) {
            new User(response)

        }
    })
}

function duplicateTimeslotEntry(event) {
    event.preventDefault()
    const formInputs = document.getElementById("form-inputs")
    const parentDiv = document.getElementById("parent-div")
    const copyDiv = formInputs.cloneNode(true)
    parentDiv.appendChild(copyDiv)
}

function showTimeslotForm() {
    const timeslotFormDiv = document.querySelector(".timeslot-form-div")
    timeslotFormDiv.style.display = "block"
}

function submitTimeslot(event) {
    event.preventDefault()
    
}

init()
