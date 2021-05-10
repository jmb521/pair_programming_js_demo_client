class Timeslots {
    static allTimeslots = []
    
    constructor(timeslot) {
        this.id = timeslot.id
        this.activity = timeslot.activity
        this.booked_time = timeslot.booked_time
        this.booked_email = timeslot.booked_email
        this.taken = timeslot.taken
        this.user_id = timeslot.user_id
        this.user = timeslot.user
        Timeslots.allTimeslots.push(this)
    }



    addNewTimeslotRow() {
        let takenTd = ""
        if(!this.taken) {
            takenTd = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                <div class="ml-4">
                    <div class="text-sm text-gray-500">
                        <form class="claim-timeslot">
                        <input type="hidden" name="timeslot[id]" value="${this.id}" />
                            Email: <input type="text" name="timeslot[booked_email]" />
                            
                            <button type="submit" class=" group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
  
                                </span>
                                Claim
                             </button> 
                        </form>
                    </div>
                </div>
                </div>
            </td>


           
                    `
        } else {
            takenTd = `
            <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="ml-4">
                <div class="text-sm text-gray-500">
                This timeslot has been taken
                </div>
              </div>
            </div>
          </td>`
            
        }
        return `<tr>
        <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="ml-4">
            <div class="text-sm text-gray-500">
                ${this.activity}
            </div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="ml-4">
            <div class="text-sm text-gray-500">
                ${this.booked_time}
            </div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="ml-4">
          <div class="text-sm text-gray-500">
              ${this.user.name}
          </div>
        </div>
      </div>
    </td> 
        
     
        
        ${takenTd}
        </tr>`
    }


}

