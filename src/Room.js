class Room {

	constructor(bookings) {
		this.id = bookings.id;
		this.bookingInfo = [];
		this.roomNumber = bookings.roomNumber;
		this.roomAvailable = true;
		this.roomServiceCharges = [];
	}

	todaysRevenue(bookings, rooms, todaysDate) {
    return bookings.reduce(function(acc, val) {
    	if (val.date === todaysDate) {
    		acc.push(rooms[val.roomNumber])
    	}
    	return acc
    }, []).filter(el => el !=undefined).reduce(function(acc, cost) {
    	acc += cost.costPerNight
    	return acc
    }, 0).toFixed(2);
 }

  percentBooked(bookings, rooms, todaysDate) {
    let percent = bookings.reduce((acc, val) => {
    	if (val.date === todaysDate) {
    		acc.push(rooms[val.roomNumber])
    	}
    	return acc
    }, []).filter(el => el !=undefined);
    return Number((percent.length / rooms.length).toFixed(2) * 100);
 }

  availableRoomsByDate(inputDate, bookings, rooms) {
    let books = bookings.reduce((acc, val) => {
      if (val.date === inputDate) {
      acc = acc.concat(rooms[val.roomNumber])
      }
      return acc
    }, []).sort((a, b) => {
     return a.number - b.number
    })
    books.pop()
    let map2 = books.map(date => {
        return `<div class="book_room-box">
        <div class="room_info-photo"></div>
          <div class="room_info">
            <li class="book_room-find"> Room Number: ${date.number} </li>
            <li class="book_room-find"> Beds: ${date.numBeds} </li>
            <li class="book_room-find"> Cost: $${date.costPerNight} </li> 
            <li class="book_room-find"> Bed Type: ${date.roomType} </li> 
            <li class="book_room-stats">Bidet: ${date.bidet} </li> </ul>
          </div>`
      })
      return map2
  }


};

export default Room;