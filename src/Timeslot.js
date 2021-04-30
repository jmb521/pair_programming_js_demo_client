class Timeslots {
    static allTimeslots = []
    
    constructor(timeslot) {
        this.activity = timeslot.activity
        this.booked_time = timeslot.booked_time
        this.booked_email = timeslot.booked_email
        this.taken = timeslot.taken
        Timeslots.allTimeslots.push(this)
    }



    addNewTimeslotRow() {
        let takenTd = ""
        if(!this.taken) {
            takenTd = `
            <td>
                <form>
                    Email: <input type="text" name="email" />
                    <input type="submit" name="submit" />
                </form>
            </td>
                    `
        } else {
            takenTd = `<td>This timeslot has been taken`
        }
        return `<tr>
        <td>${this.activity}</td>
        <td>${this.booked_time}</td>
        <td>${this.user.username}</td>
        ${takenTd}
        </tr>`
    }


}

