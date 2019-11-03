import $ from 'jquery';
import './css/base.scss';

import Person from "./Person";
import Motel from "./Motel";
import Manager from "./Manager";
import Room from "./Room";
import Customer from "./Customer";

var users;
var rooms;
var bookings;

var today = new Date();
console.log(today)
var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+0+today.getDate();

function getData(type) {
	const root = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904';
	const url = `${root}${type}`;
	const promise = fetch(url)
	                .then(data => data.json());
	return promise;
}

getData('/users/users').then(function(user) {
	users = user.users;
	users.forEach(function(user) {
	})

	getData('/rooms/rooms').then(function(room) {
	  rooms = room.rooms;
		const motel = new Motel(rooms);
	  $('#js_manager-daily').text('$' + motel.totalRevenue(rooms));
	})

	getData('/bookings/bookings').then(function(booked) {
		bookings = booked.bookings;
		const room = new Room(bookings);
	  $('#js_today-revenue').text('$' + room.todaysRevenue(bookings, rooms, date));
	  $('#js_percent-booked').text('%' + room.percentBooked(bookings, rooms, date));
	})

	$('.js_login-submit').on('click', function() {
    if ($('.user_name').val() === 'manager' && $('.user_pswd').val() === 'overlook2019') {
      window.location = "./manager.html";
  } else if ($('.user_name').val() === 'customer50' && $('.user_pswd').val() === 'overlook2019') {
      $('#js_insert-name').text(users[0].name)
  }
});


});  //End of getData


 