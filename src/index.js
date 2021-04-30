    const api = new ApiService
    
    function init() {
        let newUserForm = document.getElementById("new-user-form")
        newUserForm.addEventListener("submit", function(event) {
            let user = {}
            event.preventDefault()
            Array.from(event.target).forEach(e => {
                if(e.type !== "submit") {
                   user[e.name] = e.value
                    // user = Object.assign(...user, ...{[e.name]: e.value})
                }
              
                
                debugger
            })
            api.createNewUser(user)
            .then(response => {
                if(!response.error) {

                    new User(response)
                    debugger
                }
             
            })
        })
        const timeslotTable = document.querySelector(".timeslot-table-div")
        timeslotTable.style.display = "none"
        const newTimeslotForm = document.querySelector(".timeslot-form-div")
        newTimeslotForm.style.display = "none"
    }


    const tBody = document.querySelector("tbody")


    
        
        
    
    

    // document.addEventListener("click", function(event) {
    //     if(event.target.matches(".timeslot-h2")) {
    //         event.preventDefault()
    //         console.log(event.target)
    //     }
        
    // })

    // const timeslotURL = "http://localhost:3000/timeslots"
    // function createNewUser(user_info) {

        // fetch("http://localhost:3000/users", {
        //     method: "POST", 
        //     headers: {
        //         "Content-Type": "application/json",
        //     }, 
        //     body: JSON.stringify({
        //         user: {
        //             email: user_info[0].value, 
        //             name: user_info[1].value
        //         }
        //     })
        // })
        // .then(response => response.json())
        //! update the dom with user information
        //! display the timeslot form.
        // .then(response => console.log("response", response))
    // }


    // function updateTimeslot(timeslot) {

    //     // fetch(`${timeslotURL}/${timeslot.id}`, {
    //     //     method: "PATCH", 
    //     //     headers: {
    //     //         "content-type": "application/json", 
    //     //         accepts: "application/json"
    //     //     }, 
    //     //     body: JSON.stringify({timeslot: timeslot})
    //     // })
    //     // .then(response => response.json())
    //     .then(response => console.log("updated response", response))
    // }


    // function deleteTimeslot(id) {
    //     fetch(`${timeslotURL}/${id}`, {
    //         method: "DELETE", 
    //     })
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     //todo use method to remove the timeslot from the dom

    // }
    let inputCounter = 1;
    const activityInput = document.getElementById("activity-input")
    const bookedTimeInput = document.getElementById("booked-time-input")
    
    let duplicateButton = document.getElementById("duplicate")
    let formInputs = document.getElementById("form-inputs")
    duplicateButton.addEventListener("click", (e) => {
        e.preventDefault()
        let parentDiv = document.getElementById("parent-div")
        let copyDiv = formInputs.cloneNode(true)
        copyDiv.setAttribute("data-id", inputCounter += 1)
        parentDiv.appendChild(copyDiv)
    })


init()


