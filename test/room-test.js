import chai from 'chai';
const expect = chai.expect;

import Room from "../src/Room";
import bookingData from '../test/booking-data';
import roomData from '../test/room-data';
import userData from '../test/user-data';

const spies = require('chai-spies');
chai.use(spies);

describe('Room class', function() {
  let room;

  it('should be an object', function() {
    expect(Room).to.be.a('function');
  });

  it('should be able to return daily revenue', () => {
    room.todaysRevenue(bookingData, roomData, "2019/11/18");
    expect(room.todaysRevenue).to.equal(340.17);
  });


});
