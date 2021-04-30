class ApiService {
    constructor() {
        this.baseUrl = "http://localhost:3000";
        this.timeslotsUrl = this.baseUrl + "/timeslots"
        
    }

   static getAllTimeslots() {
        return fetch(this.baseUrl + "/timeslots")
        .then(response => response.json())

    }
  


    updateTimeslot(timeslot) {
       return fetch(this.baseUrl + "/timeslots" + timeslot.id, {
            method: "PATCH", 
            headers: {
                "content-type": "application/json", 
                accepts: "application/json"
            }, 
            body: JSON.stringify({timeslot: timeslot})
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
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                user: user
            })
        })
        .then(response => response.json())
    }


}    

