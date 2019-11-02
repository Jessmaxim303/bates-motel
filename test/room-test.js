import chai from 'chai';
const expect = chai.expect;

import Room from "./Room";

let room;
  beforeEach(() => {
    let roomData = {
    	number: 1,
      roomType: "residential suite",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 358.4};
    let room  = new Room(roomData)
  });

describe('Room class', function() {
  it('should be an object', function() {
    expect.isFunction(room);
  });


});