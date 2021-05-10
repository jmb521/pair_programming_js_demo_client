class ApiService {
    constructor() {
        this.baseUrl = "http://localhost:3000";
        this.timeslotsUrl = this.baseUrl + "/timeslots"
        
    }

    getAllTimeslots() {
        return fetch(this.baseUrl + "/timeslots")
        .then(response => response.json())
        .then(response => {
            response.forEach(timeslot => {
            const newTimeslot = new Timeslots(timeslot)
        })
    })

    }

    createTimeslot(timeslots) {
        return fetch(this.baseUrl + "/timeslots", {
            method: "POST", 
            body: timeslots
        })
        .then(response => response.json())
        .then(response => {
            const newTimeslot = new Timeslots(response)
            const timeslotFormDiv = document.querySelector(".timeslot-form-div")
            timeslotFormDiv.style.display = "none";
            
            showUserTimeslots(newTimeslot.user_id)
        })
    }

    updateTimeslot(timeslot, id) {
        debugger;
       return fetch(this.baseUrl + "/timeslots/" + id, {
            method: "PATCH", 
            body: timeslot
        })
        .then(response => response.json())
    }
    deleteTimeslot(id) {
       return fetch(`${this.baseUrl}/timeslots/${id}`, {
            method: "DELETE", 
        })
        .then(response => response.json())
    }

    createNewUser(user) {
        return fetch(this.baseUrl + "/users", {
            method: "POST", 
            body: user,
        })
        .then(response => response.json())
    }


}    

