    const api = new ApiService
    //put in everything you want to execute when the
    function init() {
        eventListeners()
        api.getAllTimeslots()
    }
    function eventListeners() {
        let newUserForm = document.querySelector("form")
        newUserForm.addEventListener("submit", submitUser) 
        let duplicateButton = document.getElementById("duplicate")
        duplicateButton.addEventListener("click", duplicateTimeslotEntry)
        const newTimeslotForm = document.querySelector("#new-timeslot-form")
        newTimeslotForm.addEventListener("submit", function(event) {
            submitTimeslot(event)
        })
        document.addEventListener("click", function(event) {
            if(event.target.matches(".delete-button")) {
                event.preventDefault()
                deleteTimeslotInputs(event)
            }
            if(event.target.matches(".all-timeslots")) {
                event.preventDefault()
                const tBody = document.querySelector("tbody")
                tBody.innerHTML = ""
                appendTimeslotToDom(Timeslots.allTimeslots)
            }
            if(event.target.matches(".available-timeslots")) {
                event.preventDefault()
                const available = Timeslots.allTimeslots.filter((timeslot) => timeslot.taken === false)

                appendTimeslotToDom(available)                
            }
            if(event.target.matches(".my-timeslots")) {
                event.preventDefault()
                const hiddenUserId = document.querySelector(".hidden-user-id")
                appendTimeslotToDom(hiddenUserId.value)
            }
        })
        document.addEventListener("submit", function(event) {
            if(event.target.matches(".claim-timeslot")) {
                event.preventDefault()
                claimTimeslot(event)
            }
        })
    }


    //done
    function submitUser(event) {
        event.preventDefault()
        api.createNewUser(new FormData(event.target))
        .then(response => {
            if(!response.error) {
                  let currentUser = new User(response)

                hideUserForm()
                showTimeslot()
                const hiddenUserId = document.querySelector(".hidden-user-id")
                hiddenUserId.value = currentUser.id
              }
        })
    }
    
    function duplicateTimeslotEntry() {

        event.preventDefault()
        let formInputs = document.getElementById("form-inputs")
        let parentDiv = document.getElementById("parent-div")
        let copyDiv = formInputs.cloneNode(true)
        parentDiv.appendChild(copyDiv)

    }

    function showTimeslot() {
        const timeslotFormDiv = document.querySelector(".timeslot-form-div")
        timeslotFormDiv.style.display = "block";
    }
    function hideUserForm() {
        const userForm = document.querySelector(".new-user-form")
        userForm.style.display = "none";
    }

    function deleteTimeslotInputs(event) {
        event.target.parentNode.remove()
    }

    function submitTimeslot(event) {
        event.preventDefault()
        if(event.target.elements["timeslot[activity]"].length > 1) {
            for(let i = 0; i< event.target.elements["timeslot[activity]"].length; i++) {
                let formData = new FormData
                formData.append("timeslot[activity]", event.target.elements["timeslot[activity]"][i].value)
                formData.append("timeslot[booked_time]", event.target.elements["timeslot[booked_time]"][i].value)
                formData.append("timeslot[user_id]", event.target.elements["timeslot[user_id]"].value)
                api.createTimeslot(formData)
            }
        }else {
            const formData = new FormData(event.target)
            api.createTimeslot(formData)
        }
    }
    function showUserTimeslots(user_id) {
        const eachTimeslot = Timeslots.allTimeslots.filter((timeslot) => timeslot.user_id === user_id)
        const table = document.querySelector(".timeslot-table-div")
        table.style.display = "block"
        appendTimeslotToDom(eachTimeslot)
    }
    function appendTimeslotToDom(timeslots) {
        const tBody = document.querySelector("tbody")        
        timeslots.forEach(timeslot => tBody.innerHTML += timeslot.addNewTimeslotRow())
    }
    
    function claimTimeslot(event) {
        const formData = new FormData(event.target)
        formData.append("timeslot[taken]", true)
        api.updateTimeslot(formData, event.target.elements["timeslot[id]"].value)
        .then(response => {
          event.target.parentNode.innerHTML = "This timeslot has been taken"
        })
    }
    
    
    

init()


