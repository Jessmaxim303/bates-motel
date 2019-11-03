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
    let percent = bookings.reduce(function(acc, val) {
    	if (val.date === todaysDate) {
    		acc.push(rooms[val.roomNumber])
    	}
    	return acc
    }, []).filter(el => el !=undefined);
    return (percent.length / rooms.length).toFixed(2) * 100;
 }

};

export default Room;