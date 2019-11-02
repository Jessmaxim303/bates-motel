class Motel {
	constructor(rooms) {
    this.customer = [];
    this.room = [];
 }

 totalRevenue(rooms) {
  return rooms.reduce(function(acc, val) {
		acc += val.costPerNight;
		return acc
	}, 0);
 }


};

export default Motel;

