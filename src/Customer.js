class Customer {
  constructor(userId, bookings) {
	  this.userID = userId;
	  this.nightsBooked = [];
	  this.totalSpent = [];
    }

    returnUsersName(userId, users, bookings) {
    	return users[userId].name;
    }

    returnUsersBookings(userId, users, bookings) {
  	  let filter1 = bookings.filter(booked => {
  	  	if (booked.userID === userId) {
  	  		this.nightsBooked.push(booked.roomNumber)
  	  	}
  	    return booked.userID === userId 
  	  })
  	  let map2 = filter1.map(dates => {
  	  	return `<li class="user-booking"> Date:${dates.date} Room:${dates.roomNumber} </ul>`;
  	  })
  	  return map2
    }

    totalMoneySpent(userId, rooms, bookings) {
  	  bookings.map(booked => {
  	  	if (booked.userID === userId) {
  	  		this.totalSpent.push(booked.roomNumber)
  	  	}
  	  })
      let map1 = this.nightsBooked.map(roomNum => {
        const found = rooms.find(room => {
        	return room.number === roomNum
        }) 
        return found.costPerNight
  	  })
  	  return map1.reduce((acc, val) => {
  	  	acc += val
  	  	return acc
  	  }, 0).toFixed(2)
    }

}

export default Customer;